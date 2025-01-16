export default function getPaginationRanges({ currentPage, totalPages, range = 2 }) {
    const pages = [];

    pages.push(1);


    const start = Math.max(currentPage - range, 2);
    const end = Math.min(currentPage + range, totalPages - 1);

    if (start > 2) {
        pages.push("...");
    }


    for (let i = start; i <= end; i++) {
        pages.push(i);
    }

    if (end < totalPages - 1) {
        pages.push("...");
    }

    if (totalPages > 1) {
        pages.push(totalPages);
    }

    return pages;
}
