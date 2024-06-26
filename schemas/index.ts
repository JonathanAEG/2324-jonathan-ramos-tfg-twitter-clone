import * as z from 'zod';

//AUTH

export const LoginSchema = z.object({
  email: z.string().email({ message: 'emailError' }),
  password: z.string().min(1, { message: 'emptyError' }),
});

export const SignupSchema = z.object({
  email: z.string().email({ message: 'emailError' }),
  password: z.string().min(6, { message: 'passwordError' }),
  name: z.string().min(1, { message: 'emptyError' }),
  username: z.string().min(1, { message: 'emptyError' }),
});

//USERS

export const EditUserSchema = z.object({
  id: z.string(),
  name: z.string().min(1, { message: 'emptyError' }),
});

export const FollowUnfollowUserSchema = z.object({
  sessionUserId: z.string().min(1),
  userId: z.string().min(1),
  isFollow: z.boolean(),
});

//POSTS

export const CreatePostSchema = z.object({
  body: z.string().min(1, { message: 'emptyError' }),
  userId: z.string(),
});

export const LikePostSchema = z.object({
  postId: z.string().min(1),
  userId: z.string().min(1),
  isLiked: z.boolean(),
});

export const ReplyPostSchema = z.object({
  body: z.string().min(1, { message: 'emptyError' }),
  userId: z.string(),
  replyPostIds: z.string().array(),
});
