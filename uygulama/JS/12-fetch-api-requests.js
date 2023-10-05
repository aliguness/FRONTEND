// https://jsonplaceholder.typicode.com URL'ine istek atın. Her bir isteği bir kere then 1 kere de async/await yöntemi ile atın. update isteklerini put ve patch şeklinde ayrı ayrı atın. Toplamda 5 adet then, 5 adet adet async/await isteği atacaksınız.
// getCommentById, getAllComments, deleteComment, updateComment(put, patch)

const getCommentByIdAsync = async (commentId) => {
  const data = await fetch();
};

const getCommentByIdThen = (commentId) => {
  return fetch(url).then().then();
};
