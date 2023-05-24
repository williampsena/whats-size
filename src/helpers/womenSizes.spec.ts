import { WomenSizeConverter, convertWomenSize } from './womenSize'

describe('WomenSize', () => {
    let converter: WomenSizeConverter

    beforeAll(() => {
        converter = convertWomenSize('brazil')
    })

    describe('should translate kids brazilian sizes to usa sizes for trips', () => {
        it('convert shoes BRL size to usa', () => {
            expect(converter.shoes('37').usa).toBe('6½')
        })

        it('convert skirts BRL size to usa', () => {
            expect(converter.skirts('38').usa).toBe('4')
        })

        it('convert dresses BRL size to usa', () => {
            expect(converter.dresses('44').usa).toBe('10')
        })
    })

    test('should return all men suits sizes', () => {
        expect(Object.keys(converter.sizes())).toStrictEqual([
            'blouses',
            'coats',
            'dresses',
            'shoes',
            'skirts',
        ])
    })
})
