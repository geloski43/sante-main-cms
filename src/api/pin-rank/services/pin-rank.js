'use strict';

/**
 * pin-rank service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pin-rank.pin-rank');
