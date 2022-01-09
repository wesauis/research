export async function getGithubProfile(user = "wesauis") {
  const response = await fetch(`https://api.github.com/users/${user}`);

  const profile = await response.json();

  return profile;
}
