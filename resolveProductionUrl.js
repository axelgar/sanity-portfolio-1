const previewSecret = 'this_is_my_random_string'
const projectUrl = 'http://localhost:3000'

export default function resolveProductionUrl(document) {
    return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${document.slug.current}`
}