"use strict";var $;function initHomeBlockZ(){var max_items=$(".home-block-z__category").data("max-items"),anchor_more_items=".home-block-z__category-more";$(anchor_more_items).on("click",function(e){if(e.preventDefault(),$(anchor_more_items).hasClass("home-block-z__category-more--less"))return $(anchor_more_items).text($(anchor_more_items).data("more")).removeClass("home-block-z__category-more--less"),void $(".home-block-z__category-list").each(function(){$(this).children(".home-block-z__category-item:gt("+(max_items-1)+")").slideUp(200)});$(anchor_more_items).addClass("home-block-z__category-more--less").text($(anchor_more_items).data("less")),$(".home-block-z__category-list").children(".home-block-z__category-item--hidden").slideDown(200)})}$(document).ready(function(){$('[data-modulair-home-block="z"]').each(function(i,e){initHomeBlockZ($(e))})});