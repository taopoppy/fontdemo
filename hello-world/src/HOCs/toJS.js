import React from 'react'
import { Iterable } from 'immutable' // 判断是否是Immutable类型的对象

export const toJS = WrappedComponent => WrappedComponentProps => {
	const KEY = 0
	const VALUE = 1
	const propsJS = Object.entries(WrappedComponentProps)
	.reduce((newProps, wrappedComponentProp) => {
		newProps[wrappedComponentProp[KEY]] = 
		Iterable.isIterable(wrappedComponentProp[VALUE]) ?
		WrappedComponentProps[VALUE].toJS():
		WrappedComponentProps[VALUE]
		return newProps
	}, {})
	return <WrappedComponent {...propsJS}/>
}