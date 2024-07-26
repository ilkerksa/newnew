var config = {
    style: 'mapbox://styles/ilkerksa/clyvjguiu005u01r08scu2owe',
    accessToken: 'pk.eyJ1IjoiaWxrZXJrc2EiLCJhIjoiY2x5cjVwODhmMDJscDJpczZ3M2NnNGcydCJ9.1zVupR_cTSWgFEYD0830dg',
    showMarkers: true,
    markerColor: 'FF8C00',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'İstanbul’da Müze Keyfi',
    subtitle: 'Tarih, Sanat ve Kültürle Dolu Bir Yolculuk',
    byline: 'By İlker Kısa',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'right',
            hidden: false,
            title: 'Topkapı Sarayı Müzesi',
            image: 'https://www.turizmgunlugu.com/wp-content/uploads/2019/07/İstanbul-Topkapı-Sarayı.jpg',
            description: 'Osmanlı İmparatorluğu’nun 400 yıl boyunca yönetim merkezi olan Topkapı Sarayı, muhteşem mimarisi ve zengin koleksiyonlarıyla büyüleyici bir atmosfere sahiptir. Sarayda, Osmanlı padişahlarının kullandığı eşyalar, kutsal emanetler ve Harem bölümü gibi önemli alanlar yer alır. Saray bahçelerinden İstanbul Boğazı’nın muhteşem manzarasını izlemek de mümkündür.',
            location: {
                center: [28.98430, 41.01181],
                zoom: 16,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Ayasofya Müzesi',
            image: 'https://www.meroddi.com/wp-content/uploads/2022/06/ayasofyanin-gizemi.png.webp',
            description: ' 6. yüzyılda Bizans İmparatoru Justinianus tarafından inşa edilen Ayasofya, hem kilise hem cami olarak hizmet vermiş ve günümüzde müze olarak ziyaretçilere kapılarını açmıştır. İç mekanındaki görkemli mozaikler ve mimari detaylar, Bizans ve Osmanlı dönemlerinin izlerini taşır. Ayasofya, İstanbul’un en ikonik yapılarından biridir ve her yıl milyonlarca ziyaretçiyi ağırlar.',
            location: {
                center: [28.97994, 41.00848],
                zoom: 16,
                pitch: 45,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'İstanbul Arkeoloji Müzeleri',
            image: 'https://kaftanhotel.com/wp-content/uploads/2014/12/istanbul-arkeoloji-muzesi.jpg',
            description: 'İstanbul Arkeoloji Müzeleri, Arkeoloji Müzesi, Eski Şark Eserleri Müzesi ve Çinili Köşk Müzesi olmak üzere üç ana binadan oluşur. Müze kompleksi, dünya tarihine ışık tutan binlerce eseri barındırır. Anadolu, Mezopotamya ve antik Mısır’dan eserler, ünlü İskender Lahdi ve Truva hazineleri gibi önemli arkeolojik buluntuları içerir.',
            location: {
                center: [28.98092, 41.01145],
                zoom: 16,
                pitch: 45,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: ' İstanbul Modern Sanat Müzesi',
            image: 'https://www.istanbulsanatdergisi.com/wp-content/uploads/2024/02/Modern1.jpg',
            description: 'İstanbul Modern, Türkiye’nin modern ve çağdaş sanatını sergileyen öncü bir müzedir. Sürekli sergilerde, Türk ve yabancı sanatçıların eserlerine yer verilirken, geçici sergilerde ise farklı temalarda sanat eserleri sunulmaktadır. Müze, Boğaz kıyısında Karaköy’de bulunur ve ziyaretçilere eşsiz bir sanat deneyimi sunar.',
            location: {
                center: [28.98302, 41.02586],
                zoom: 16,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Pera Müzesi',
            image: 'https://pbs.twimg.com/media/ES6QGqNWkAAzCoD.jpg',
            description: ' Pera Müzesi, Suna ve İnan Kıraç Vakfı tarafından kurulmuş olup, Orientalist resim koleksiyonları, Osman Hamdi Bey’in eserleri ve Anadolu ağırlık ve ölçü koleksiyonlarıyla ünlüdür. Müze, tarihi Pera bölgesinde yer alır ve çeşitli sergilerle ziyaretçilere zengin bir kültürel deneyim sunar. Müze binası, 19. yüzyılın sonunda inşa edilmiş eski bir oteldir.',
            location: {
                center:[28.97510, 41.03186],
                zoom: 16,
                pitch: 45,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Rahmi M. Koç Müzesi',
            image: 'https://yoldaolmak.com/wp-content/uploads/2023/07/Cengelhan-Rahmi-Koc-Museum.jpg',
            description: ' Rahmi M. Koç Müzesi, ulaşım, endüstri ve iletişim tarihine dair geniş bir koleksiyon sunar. Müze, klasik otomobillerden tarihi uçaklara, denizaltılardan buharlı lokomotiflere kadar birçok ilginç araca ev sahipliği yapar. Haliç kıyısında yer alan bu müze, hem çocuklar hem de yetişkinler için eğitici ve eğlenceli bir deneyim sunar.',
            location: {
                center:[28.94933, 41.04208],
                zoom: 16,
                pitch: 45,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventh-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Dolmabahçe Sarayı',
            image: 'https://www.kulturportali.gov.tr/contents/images/İSTANBUL-DOLMABAHÇE%20SARAYI-GÜLCAN%20ACAR%20(7).jpg',
            description: ' Osmanlı İmparatorluğu’nun son dönemlerinde inşa edilen Dolmabahçe Sarayı, muhteşem Boğaz manzarası ve zengin iç dekorasyonuyla etkileyicidir. Saray, Avrupa mimarisi ile Osmanlı geleneklerinin harmanlandığı benzersiz bir yapıdır. Sarayın içindeki kristal avizeler, altın kaplamalar ve geniş salonlar, ziyaretçilere unutulmaz bir deneyim sunar.',
            location: {
                center:[29.00062, 41.03904],
                zoom: 16,
                pitch: 45,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
