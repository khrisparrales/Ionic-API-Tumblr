export interface RootObjectFollowing {
  meta: Meta;
  response: Response;
}

export interface Response {
  blogs: Blog[];
  total_blogs: number;
  _links: Links;
}

export interface Links {
  next: Next;
}

export interface Next {
  href: string;
  method: string;
  query_params: Queryparams;
}

export interface Queryparams {
  offset: string;
}

export interface Blog {
  name: string;
  title: string;
  description: string;
  url: string;
  uuid: string;
  updated: number;
}

export interface Meta {
  status: number;
  msg: string;
}