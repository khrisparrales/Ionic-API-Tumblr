export interface RootObjectPosts {
    meta: Meta;
    response: Response;
}

export interface Response {
    blog: Blog;
    posts: Post2[];
    total_posts: number;
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
    type: string; 
    offset: string;
    page_number: string;
}

export interface Post2 {
    type: string;
    blog_name: string;
    blog: Blog2;
    id: number;
    id_string: string;
    post_url: string;
    slug: string;
    date: string;
    timestamp: number;
    state: string;
    format: string;
    reblog_key: string;
    tags: any[];
    short_url: string;
    summary: string;
    should_open_in_legacy: boolean;
    recommended_source?: any;
    recommended_color?: any;
    note_count: number;
    source_url?: string;
    source_title?: string;
    caption?: string;
    reblog: Reblog;
    trail: (Trail | Trail2 | Trail3 | Trail4 | Trail5 | Trail6 | Trail7 | Trail8 | Trail9)[];
    photoset_layout?: string;
    photos?: Photo[];
    can_like: boolean;
    can_reblog: boolean;
    can_send_in_message: boolean;
    can_reply: boolean;
    display_avatar: boolean;
    title?: string;
    body?: string;
    image_permalink?: string;
    link_url?: string;
}

export interface Photo {
    caption: string;
    original_size: Avatar;
    alt_sizes: Avatar[];
    exif?: Exif;
}

export interface Exif {
    ISO: number;
    Exposure: string;
    FocalLength: string;
}

export interface Trail9 {
    blog: Blog5;
    post: Post;
    content_raw: string;
    content: string;
    is_root_item?: boolean;
}

export interface Trail8 {
    blog: Blog8;
    post: Post;
    content_raw: string;
    content: string;
    is_root_item: boolean;
}

export interface Blog8 {
    name: string;
    active: boolean;
    theme: any[];
    share_likes: boolean;
    share_following: boolean;
    can_be_followed: boolean;
}

export interface Trail7 {
    blog: Blog7;
    post: Post;
    content_raw: string;
    content: string;
    is_root_item: boolean;
}

export interface Trail6 {
    blog: Blog7;
    post: Post;
    content_raw: string;
    content: string;
}

export interface Blog7 {
    name: string;
    active: boolean;
    theme: Theme5;
    share_likes: boolean;
    share_following: boolean;
    can_be_followed: boolean;
}

export interface Theme5 {
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

export interface Trail5 {
    blog: Blog4;
    post: Post;
    content_raw: string;
    content: string;
    is_current_item: boolean;
}

export interface Trail4 {
    blog: Blog6;
    post: Post;
    content_raw: string;
    content: string;
    is_root_item: boolean;
}

export interface Blog6 {
    name: string;
    active: boolean;
    theme: Theme4;
    share_likes: boolean;
    share_following: boolean;
    can_be_followed: boolean;
}

export interface Theme4 {
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

export interface Trail3 {
    blog: Blog5;
    post: Post;
    content_raw: string;
    content: string;
    is_current_item?: boolean;
}

export interface Blog5 {
    name: string;
    active: boolean;
    theme: Theme3;
    share_likes: boolean;
    share_following: boolean;
    can_be_followed: boolean;
}

export interface Theme3 {
    header_full_width?: number;
    header_full_height?: number;
    avatar_shape: string;
    background_color: string;
    body_font: string;
    header_bounds: number | string;
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

export interface Trail2 {
    blog: Blog4;
    post: Post;
    content_raw: string;
    content: string;
    is_root_item: boolean;
}

export interface Blog4 {
    name: string;
    active: boolean;
    theme: Theme;
    share_likes: boolean;
    share_following: boolean;
    can_be_followed: boolean;
}

export interface Trail {
    blog: Blog3;
    post: Post;
    content_raw: string;
    content: string;
}

export interface Post {
    id: string;
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
    header_full_width?: number;
    header_full_height?: number;
    header_focus_width?: number;
    header_focus_height?: number;
    avatar_shape: string;
    background_color: string;
    body_font: string;
    header_bounds: number | string;
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

export interface Blog2 {
    name: string;
    title: string;
    description: string;
    url: string;
    uuid: string;
    updated: number;
}

export interface Blog {
    ask: boolean;
    ask_anon: boolean;
    ask_page_title: string;
    asks_allow_media: boolean;
    avatar: Avatar[];
    can_chat: boolean;
    can_subscribe: boolean;
    description: string;
    is_nsfw: boolean;
    likes: number;
    name: string;
    posts: number;
    share_likes: boolean;
    submission_page_title: string;
    subscribed: boolean;
    theme: Theme;
    title: string;
    total_posts: number;
    updated: number;
    url: string;
    uuid: string;
    is_optout_ads: boolean;
}

export interface Theme {
    avatar_shape: string;
    background_color: string;
    body_font: string;
    header_bounds: number;
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

export interface Avatar {
    width: number;
    height: number;
    url: string;
}

export interface Meta {
    status: number;
    msg: string;
}