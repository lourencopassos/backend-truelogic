import Joi from 'joi'

export const albumSchema = Joi.object({
  title: Joi.string().min(2).max(50).required(),
  url: Joi.string().max(100).uri().required(),
  thumbnailUrl: Joi.string().max(100).uri().required()
})
