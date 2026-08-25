# IP Inspector

A free, single-page IP lookup tool — geolocation, ISP/ASN, reverse DNS, and VPN/proxy/Tor detection for any IPv4/IPv6 address or domain. Live at [ip.hbenali.ovh](https://ip.hbenali.ovh).

No backend, no build step, no dependencies — it's one static `index.html` calling public APIs directly from the browser.

## Features

- **Lookup** any IP address or domain (resolved via DNS-over-HTTPS) — geolocation, ISP/ASN, timezone, reverse DNS, VPN/proxy/Tor/hosting signals, and a risk assessment
- **Your public IP** shown on load, with copy and refresh
- **Interactive map** (OpenStreetMap embed) for the resolved location
- **Recent lookups** history (kept in `localStorage`)
- **Copy report / share link / export JSON** for any result
- **Subnet & CIDR calculator** — network/broadcast address, mask, usable host range
- **Dark mode** with persisted preference
- Keyboard shortcuts (`/` to focus, `Enter` to inspect, `Esc` to clear)
- Fully responsive, accessible (ARIA tabs, WCAG AA contrast), and SEO-tagged (Open Graph, Twitter Card, JSON-LD)

## Running locally

No build step required — just serve the directory:

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Data sources

All lookups happen client-side against free public APIs:

- [ipapi.co](https://ipapi.co) / [ip-api.com](https://ip-api.com) — geolocation & ISP data (with automatic fallback)
- [dns.google](https://developers.google.com/speed/public-dns/docs/doh) — DNS-over-HTTPS for domain resolution and reverse DNS
- [api.ipify.org](https://www.ipify.org) — public IP detection
- [OpenStreetMap](https://www.openstreetmap.org) — location map embed

## Deployment

Deployed automatically to GitHub Pages on every push to `main` (see `.github/workflows/`).

## License

MIT — see [LICENSE](LICENSE).
