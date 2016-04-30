
export const POST_LIST_INVALIDED = "POST_LIST_INVALIDED";
export function postListInvalidedAction(label) {
  return {
    type: POST_COMMENT_LIKE,
    label: label,
  }
}

export const POST_COMMENT_LIKE = "POST_COMMENT_LIKE";
export function postCommentLikeAction(pid, cid) {
  return {
    type: POST_COMMENT_LIKE,
    pid: pid,
    cid: cid,
  }
}

export const POST_POST_LIKE = "POST_POST_LIKE";
export function postPostLikeAction(pid) {
  return {
    type: POST_POST_LIKE,
    pid: pid,
  }
}
