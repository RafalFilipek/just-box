// @flow

export default () => {
  const node = document.getElementById('stylesheet');
  if (!node || !node.parentNode) {
    throw new Error('[just-box] Error: Missing stylesheet node for Fela');
  }
  const nextNode = document.createElement('style');
  nextNode.id = 'stylesheet';
  node.parentNode && node.parentNode.replaceChild(nextNode, node);
  return nextNode;
};
