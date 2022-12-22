/** @type {import('next').NextConfig} */

module.exports = {
    images: {
        domains: [
            "se-images.campuslabs.com",
            "www.clker.com",
            "upload.wikimedia.org",
        ],
    },
    reactStrictMode: false,
    swcMinify: true,
    async redirects() {
        return [
            {
                source: "/",
                destination: "/clubs",
                permanent: true,
            },
        ];
    },
};
