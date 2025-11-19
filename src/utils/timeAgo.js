export function timeAgo(date) {
  if (!date) return 'Created just now';

  const seconds = Math.floor((Date.now() - Number(date)) / 1000);

  // Only for first 1 second
  if (seconds < 1) return 'Created just now';

  if (seconds < 60) return `Created ${seconds} seconds ago`;

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `Created ${minutes} minutes ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `Created ${hours} hours ago`;

  const days = Math.floor(hours / 24);
  return `Created ${days} days ago`;
}
