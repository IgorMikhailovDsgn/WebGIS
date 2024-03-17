const key = 'd1vKXyLQ6kA3y1fGAmLc';

      const attribution = new ol.control.Attribution({
        collapsible: true,
      });

      const source = new ol.source.TileJSON({
        url: `https://api.maptiler.com/maps/streets-v2/tiles.json?key=${key}`, // source URL
        tileSize: 512,
      });

      const map = new ol.Map({
        layers: [
          new ol.layer.Tile({
            source: source
          })
        ],
        controls: ol.control.defaults.defaults({attribution: false}).extend([attribution]),
        target: 'map',
        view: new ol.View({
          constrainResolution: true,
          center: ol.proj.fromLonLat([0, 0]), // starting position [lng, lat]
          zoom: 2 // starting zoom
        })
      });

      const airports = new ol.layer.Vector({
        source: new ol.source.Vector({
          url: `https://api.maptiler.com/data/cf84d452-2010-42a3-b6a2-40eb04a9509d/features.json?key=${key}`,
          format: new ol.format.GeoJSON()
        }),
        style: new ol.style.Style({
          image: new ol.style.Icon({
            src: './plane-1.svg',
            scale: 0.75
          })
        })
      })

      map.addLayer(airports)