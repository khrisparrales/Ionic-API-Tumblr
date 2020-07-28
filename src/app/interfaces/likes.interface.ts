export interface RootObjectlikes {
  meta: Meta;
  response: Response;
}

export interface Response {
  liked_posts: Likedpost[];
  liked_count: number;
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
  before: string;
}

export interface Likedpost {
  type: string;
  blog_name: string;
  blog: Blog;
  id: number;
  id_string: string;
  post_url: string;
  slug: string;
  date: string;
  timestamp: number;
  state: string;
  format: string;
  reblog_key: string;
  tags: string[];
  short_url: string;
  summary: string;
  should_open_in_legacy: boolean;
  recommended_source?: any;
  recommended_color?: any;
  note_count: number;
  caption?: string;
  reblog: Reblog;
  trail: (Trail | Trail2 | Trail3)[];
  photoset_layout?: string;
  photos?: Photo[];
  liked_timestamp: number;
  can_like: boolean;
  can_reblog: boolean;
  can_send_in_message: boolean;
  can_reply: boolean;
  display_avatar: boolean;
  title?: string;
  body?: string;
  source_url?: string;
  source_title?: string;
  image_permalink?: string;
  link_url?: string;
}

export interface Photo {
  caption: string;
  original_size: Originalsize;
  alt_sizes: Originalsize[];
  exif?: Exif;
}

export interface Exif {
  Camera: string;
  ISO: number;
  Aperture: string;
  Exposure: string;
  FocalLength: string;
}

export interface Originalsize {
  url: string;
  width: number;
  height: number;
}

export interface Trail3 {
  blog: Blog2;
  post: Post;
  content_raw: string;
  content: string;
  is_current_item: boolean;
  is_root_item: boolean;
}

export interface Trail2 {
  blog: Blog3;
  post: Post;
  content_raw: string;
  content: string;
  is_root_item: boolean;
}

export interface Blog3 {
  name: string;
  active: boolean;
  theme: Theme2;
  share_likes: boolean;
  share_following: boolean;
  can_be_followed: boolean;
}

export interface Theme2 {
  header_full_width: number;
  header_full_height: number;
  avatar_shape: string;
  background_color: string;
  body_font: string;
  header_bounds: string;
  header_image: string;
  header_image_focused: string;
  header_image_poster: string;
  header_image_scaled: string;
  header_stretch: boolean;
  link_color: string;
  show_avatar: boolean;
  show_description: boolean;
  show_header_image: boolean;
  show_title: boolean;
  title_color: string;
  title_font: string;
  title_font_weight: string;
}

export interface Trail {
  blog: Blog2;
  post: Post;
  content_raw: string;
  content: string;
  is_root_item: boolean;
}

export interface Post {
  id: string;
}

export interface Blog2 {
  name: string;
  active: boolean;
  theme: Theme;
  share_likes: boolean;
  share_following: boolean;
  can_be_followed: boolean;
}

export interface Theme {
  header_full_width: number;
  header_full_height: number;
  header_focus_width: number;
  header_focus_height: number;
  avatar_shape: string;
  background_color: string;
  body_font: string;
  header_bounds: string;
  header_image: string;
  header_image_focused: string;
  header_image_poster: string;
  header_image_scaled: string;
  header_stretch: boolean;
  link_color: string;
  show_avatar: boolean;
  show_description: boolean;
  show_header_image: boolean;
  show_title: boolean;
  title_color: string;
  title_font: string;
  title_font_weight: string;
}

export interface Reblog {
  comment: string;
  tree_html: string;
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