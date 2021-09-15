import { NextApiRequest } from 'next';
import createApiHandler from '../../../api/lib/create-api-handler';
import { mockPoll } from '../../../mock';
import Poll from '../../../types/Poll';

interface CreatePollRequest extends NextApiRequest {
  body: Partial<Omit<Poll, 'id'>>;
}

const PollListHandler = createApiHandler()
  .get(async (req, res) => {
    // TODO: get poll list
    const pollList: Poll[] = [mockPoll];

    return res.json(pollList);
  })
  .post(async (req: CreatePollRequest, res) => {
    // TODO: save poll
    const newPoll: Poll = mockPoll;
    return res.json(newPoll);
  });

export default PollListHandler;
