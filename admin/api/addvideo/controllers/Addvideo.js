'use strict';

/**
 * Addvideo.js controller
 *
 * @description: A set of functions called "actions" for managing `Addvideo`.
 */

module.exports = {

  /**
   * Retrieve addvideo records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.addvideo.search(ctx.query);
    } else {
      return strapi.services.addvideo.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a addvideo record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.addvideo.fetch(ctx.params);
  },

  /**
   * Count addvideo records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.addvideo.count(ctx.query);
  },

  /**
   * Create a/an addvideo record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.addvideo.add(ctx.request.body);
  },

  /**
   * Update a/an addvideo record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.addvideo.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an addvideo record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.addvideo.remove(ctx.params);
  }
};
