import NodeMediaServer from 'node-media-server';
import rtmpConfig from './configs/rtmpConfig';

const mediaServer = new NodeMediaServer(rtmpConfig);

mediaServer.on('prePublish', () => {
  console.log('New stream detected');
});

export default mediaServer;
