import { convertSize, getSizes } from './size'

describe('Size', () => {
    describe('convertSize/2', () => {
        test('should translate generic clothing sizes from the United States to Brazilian/Europe sizes', () => {
            expect(convertSize('usa', 'xs')).toStrictEqual({
                brazil: 'pp',
                europe: 'xs',
                usa: 'xs',
            })
            expect(convertSize('usa', 's')).toStrictEqual({
                brazil: 'p',
                europe: 's',
                usa: 's',
            })
        })

        test('should translate generic clothing sizes from the Europe to Brazilian/USA sizes', () => {
            expect(convertSize('europe', 'xs')).toStrictEqual({
                brazil: 'pp',
                europe: 'xs',
                usa: 'xs',
            })
            expect(convertSize('europe', 's')).toStrictEqual({
                brazil: 'p',
                europe: 's',
                usa: 's',
            })
        })
    })

    describe('getSizes/2', () => {
        test('should return clothing sizes from Country and DataSizeType', () => {
            expect(
                Object.keys(getSizes('brazil', 'kids_clothes'))
            ).toStrictEqual(['2', '4', '6', '8', '10', '12', '14', '16+'])
        })
    })
})
