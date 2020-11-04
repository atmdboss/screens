export const setup = async () => {
  try {
    const userResponse = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    );
    const postResponse = await fetch(
      'https://jsonplaceholder.typicode.com/posts'
    );
    const userData = await userResponse.json();
    const postData = await postResponse.json();
    const modAuthors: Author[] = userData.map((author: Author) => {
      const posts = postData.filter((post: Post) => post.userId === author.id);
      return { ...author, posts };
    });
    return modAuthors;
  } catch (error) {
    console.log(error.message);
  }
};
