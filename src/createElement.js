let createElement = (type, props, ...children) => {
	let vnode = { type, props }
	if (children.length) {
		vnode.children = children
	}
	return vnode
}

export default createElement