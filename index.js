import Peer from 'skyway-js';
const peer = new Peer({key: '04b37624-0465-443b-9a67-867469528255'});
peer.on('open', () => {
    document.getElementById('my-id').textContent = peer.id;
});