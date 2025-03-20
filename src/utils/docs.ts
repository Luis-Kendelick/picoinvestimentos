import { compareAsc } from 'date-fns'

interface IDoc {
    file: string
    date: string
}

export const docs = {
    monthlyReports: [{
        file: 'carta-mensal-12-24.pdf',
        date: '2024-12-02',
    }, {
        file: 'carta-mensal-01-25.pdf',
        date: '2025-01-02',
    }, {
        file: 'carta-mensal-02-25.pdf',
        date: '2025-02-02',
    }],
    newsletters: [
        {
            file: 'newsletter-12-24.pdf',
            date: '2024-12-02',
        },
        {
            file: 'newsletter-01-25.pdf',
            date: '2025-01-02',
        },
    ],
}

export const dateOrderedDocs = (): {
    monthlyReports: IDoc[], newsletters: IDoc[]
} => {
    const orderedMonthlyReportDocs = docs.monthlyReports.sort((a, b) => {
        return compareAsc(a.date, b.date)
    })
    const orderedNewslettersDocs = docs.newsletters.sort((a, b) => {
        return compareAsc(a.date, b.date)
    })
    return {
        monthlyReports: orderedMonthlyReportDocs,
        newsletters: orderedNewslettersDocs
    }
}