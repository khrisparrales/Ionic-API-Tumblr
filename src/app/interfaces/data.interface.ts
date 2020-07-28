export interface RespuestaTop {
    meta: Meta;
    response: Response;
}

export interface Response {
    blog: Blog;
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