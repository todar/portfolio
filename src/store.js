export async function fetchGithubProfile() {
  const ID = __myapp.env.GITHUB_CLIENT_ID;
  const SECRET = __myapp.env.GITHUB_CLIENT_SECRET;
  const res = await fetch(`https://api.github.com/users/todar`, {
    method: "GET",
    headers: {
      "User-Agent": "todar",
      Authorization: `${ID}:${SECRET}`,
    },
  });
  const user = await res.json();

  if (res.ok) {
    return user;
  } else {
    throw new Error(user);
  }
}

export async function fetchStackoverflowProfile() {
  const res = await fetch(
    `https://api.stackexchange.com/2.2/users/8309643?&site=stackoverflow`
  );
  const user = await res.json();

  if (res.ok) {
    return user;
  } else {
    throw new Error(user);
  }
}
