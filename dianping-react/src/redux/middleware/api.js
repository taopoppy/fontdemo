import { get } from '../../utils/request'

// 凡是action当中有这个属性的都要经过中间件的处理
export const FETCH_DATA = "FETCH DATA"

export default store => next => action => {
	const callAPI = action[FETCH_DATA]
	if (typeof callAPI === undefined) {
		// 说明不是请求数据的action，放过处理
		return next(action)
	}

	const { endpoint, schema, types } = callAPI
	if (typeof endpoint !== "string") {
		throw new Error("endpoint必须为字符串类型的URL")
	}
	if (!schema) {
		// schema属性也是必须的，否则不知道怎么做扁平化处理
		throw new Error("必须指定领域实体的schema")
	}
	if (!Array.isArray(types) && types.length !== 3) {
		throw new Error("需要指定一个包含3个action type的数组")
	}

	if (!types.every(type => typeof type === "string")) {
		throw new Error("action type必须为字符串类型")
	}

	// 增强版的action,确保除了FETCH_DATA的其他属性可以传递下去
	const actionWith = data => {
		const finalAction = {...action, ...data}
		delete finalAction[FETCH_DATA] // 删除掉FETCH_DATA属性
		return finalAction
	}

	const [requestType, successType, failureType] = types


	next(actionWith({type: requestType}))
	return fetchData(endpoint, schema).then(
		response => next(actionWith({
			type: successType,
			response
		})),
		error => next(actionWith({
			type: failureType,
			error: error.message || "获取数据失败"
		}))
	)
}

//执行网络请求
const fetchData = (endpoint, schema) => {
  return get(endpoint).then(data => {
    return normalizeData(data, schema)
  })
}

//根据schema, 将获取的数据扁平化处理
const normalizeData = (data, schema) => {
  const {id, name} = schema
  let kvObj = {} // 用于存储扁平化数据的变量
  let ids = [] // 保存每个数据当中的id，维护有序性
  if(Array.isArray(data)) {
    data.forEach(item => {
      kvObj[item[id]] = item
      ids.push(item[id])
    })
  } else {
    kvObj[data[id]] = data
    ids.push(data[id])
  }
  return {
    [name]: kvObj,
    ids
  }
}