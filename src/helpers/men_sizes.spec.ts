import { MenSizeConverter, convertMenSize } from './men_size'

describe('MenSize', () => {
    let converter: MenSizeConverter

    beforeAll(() => {
        converter = convertMenSize('brazil')
    })

    describe('should translate men brazilian sizes to usa sizes for trips', () => {
        test('convert shoes BRL size to usa', () => {
            expect(converter.shoes('42').usa).toBe('10½')
        })

        test('convert shirt BRL size to usa', () => {
            expect(converter.shirts('4').usa).toBe('16½ 17')
        })

        test('convert suits BRL size to usa', () => {
            expect(converter.suits('46').usa).toBe('36')
        })
    })

    test('should return all men suits sizes', () => {
        expect(Object.keys(converter.sizes())).toStrictEqual([
            'shirts',
            'shoes',
            'suits',
        ])
    })
})
