class Source {
    example() {
        let e0 = {
            name: '插入排序',
            source: `
$insert_sort |数组| 要做咩:
    |索引| 从 0 行到 |数组 嘅长度|
        讲嘢: |当前索引| 係 |索引 减 1|
        讲嘢: |当前元素| 係 |数组[索引]|
        落操场玩跑步
            讲嘢: |数组[当前索引 加 1]| 係 |数组[当前索引]|
            讲嘢: |当前索引| 係 |当前索引 减 1|
        玩到 |当前索引 < 0 或者 数组[当前索引] 比唔上 当前元素| 为止
        讲嘢: |数组[当前索引 加 1]| 係 |当前元素|
    行晒
    畀我睇下 |数组| 点样先?
搞掂
        
用下 |insert_sort([64, 34, 25, 12, 22, 11, 90])|
用下 |insert_sort([21, 22, 90, 12, 55, 77, 97])|
`
        }
        let e1 = {
            name: '冒泡排序',
            source: `
$bubble_sort |数组| 要做咩:
    讲嘢: |长度| 係 |数组 嘅长度|
    |i| 从 1 行到 |长度|
        |索引| 从 0 行到 |长度 减 i|
            如果 |数组[索引 加 1] 比唔上 数组[索引]| 嘅话 -> {
                讲嘢: |交换| 係 |数组[索引]|
                讲嘢: |数组[索引]| 係 |数组[索引 加 1]|
                讲嘢: |数组[索引 加 1]| 係 |交换|
            }
        行晒
    行晒
    畀我睇下 |数组| 点样先?
    搞掂
        
bubble_sort 下 -> |[64, 34, 25, 12, 22, 11, 90]|
bubble_sort 下 -> |[21, 22, 90, 12, 55, 77, 97]|
`
        }
        
        return {
            'name': '例子',
            'id': 'example',
            'codes': [e0, e1]
        }
    }
}

let source = new Source()

export {source}

