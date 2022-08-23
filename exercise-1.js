import axios from "axios";

const getUser = (user_id) => {
  return new Promise(async (resolve, reject) => {
    const { data: user } = await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`)
    resolve(user)
  })
}

const getPost = (user_id) => {
  return new Promise(async (resolve, reject) => {
    const { data: post } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`)
    resolve(post)
  })
}

const getData = async (user_id) => {
  try {
    const user = await getUser(user_id)
    const post = await getPost(user_id)

    user.posts = post
    return user

  } catch (err) {
    console.log(err)
  }
}

export default getData;
