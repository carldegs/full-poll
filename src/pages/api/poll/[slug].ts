import { string } from 'joi';
import { NextApiRequest } from 'next';
import createApiHandler from '../../../api/lib/create-api-handler';
import Poll from '../../../types/Poll';
import { mockPoll } from '../../../mock';
interface PollRequest extends NextApiRequest {
  query: {
    slug: string;
  };
}

interface UpdatePollRequest extends NextApiRequest {
  query: {
    slug: string;
  };
  body: Partial<Omit<Poll, 'id'>>;
}

// TODO: Add authentication
const PollHandler = createApiHandler()
  .get(async (req: PollRequest, res) => {
    // TODO: Get poll
    const poll: Poll = mockPoll;

    return res.json(poll);
  })
  .patch(async (req: UpdatePollRequest, res) => {
    // TODO: Update poll
    const updatedPoll: Poll = mockPoll;

    return res.json(updatedPoll);
  })
  .delete(async (req: PollRequest, res) => {
    // TODO: Delete poll
    return res.json({ success: true });
  });

export default PollHandler;
