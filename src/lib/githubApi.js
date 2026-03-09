const GITHUB_API = 'https://api.github.com';

/**
 * Fetch all public repos for a GitHub username.
 * @param {string} username - GitHub username
 * @returns {Promise<Array>} Array of repo objects
 */
export async function fetchUserRepos(username) {
  if (!username?.trim()) {
    throw new Error('GitHub username is required');
  }
  const url = `${GITHUB_API}/users/${encodeURIComponent(username)}/repos?per_page=100&sort=updated`;
  const res = await fetch(url);
  if (!res.ok) {
    if (res.status === 403) {
      const data = await res.json().catch(() => ({}));
      const message = data.message || 'GitHub API rate limit exceeded. Please try again later.';
      throw new Error(message);
    }
    if (res.status === 404) {
      throw new Error(`User "${username}" not found on GitHub`);
    }
    throw new Error(`Failed to fetch repos: ${res.status} ${res.statusText}`);
  }
  return res.json();
}
