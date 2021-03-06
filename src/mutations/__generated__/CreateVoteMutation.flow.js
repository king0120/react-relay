/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule CreateVoteMutation.flow
 * @generated SignedSource<<0c5b9e0dbb732b45b065470d5147c7b9>>
 * @flow
 */

'use strict';

export type CreateVoteInput = {
  linkId?: ?string;
  link?: ?CreateVoteInput_link;
  userId?: ?string;
};

export type CreateVoteInput_link_votes = {
  userId?: ?string;
};

export type CreateVoteInput_link = {
  description?: ?string;
  url?: ?string;
  postedById?: ?string;
  votesIds?: ?string;
  votes?: ?Array<CreateVoteInput_link_votes>;
};

export type CreateVoteMutationResponse = {
  vote?: ?CreateVoteMutationResponse_vote;
};

export type CreateVoteMutationResponse_vote_link_votes = {
  count: number;
};

export type CreateVoteMutationResponse_vote_link = {
  id: string;
  votes?: ?CreateVoteMutationResponse_vote_link_votes;
};

export type CreateVoteMutationResponse_vote_user = {
  id: string;
};

export type CreateVoteMutationResponse_vote = {
  id: string;
  link: CreateVoteMutationResponse_vote_link;
  user: CreateVoteMutationResponse_vote_user;
};
