import { RequestHandler } from 'express';
import request from '../../helpers/request';
import { API_STREAMS } from '../../constants/services';
import { StreamsData } from '../../interfaces/streams';

const streams: RequestHandler = async (req, res) => {
  try {
    const { data } = await request.get<StreamsData>(API_STREAMS);

    if (data.live) {
      const streams = Object.values(data.live).map(
        ({ publisher }) => publisher.stream
      );

      res.status(200).json(streams);
    }

    res.status(200).json([]);
  } catch (e) {
    res.status(500).json('Unexpected error!');
  }
};

export default streams;
