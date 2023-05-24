import { KidsSizeConverter, convertKidsSize } from './kidsSize'

describe('KidsSize', () => {
    let converter: KidsSizeConverter

    beforeAll(() => {
        converter = convertKidsSize('brazil')
    })

    describe('should translate kids brazilian sizes to usa sizes for trips', () => {
        test('for generic clothing size', () => {
            expect(converter.clothes('2').usa).toBe('2 3')
        })

        test('for shoes size', () => {
            expect(converter.shoes('30').usa).toBe('11½')
        })
    })

    test('should return all kids sizes', () => {
        expect(Object.keys(converter.sizes())).toStrictEqual(['clothes', 'shoes'])
    })
})
