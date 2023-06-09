import { useState } from 'react';

const AreaForm = ({ preLoadedData }) => {
  const [areaName, setAreaName] = useState(preLoadedData.areaName);
  const [areaQuirks, setAreaQuirks] = useState(preLoadedData.areaQuirks);
  const [commonEnemies, setCommonEnemies] = useState(
    preLoadedData.commonEnemies
  );
  const [areaInfo, setAreaInfo] = useState(preLoadedData.areaInfo);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!areaInfo) {
      alert('Stop sucking and explore the area a bit!');
      return;
    }

    areaLog({ areaName, areaQuirks, areaInfo });

    if (preLoadedData != '') {
      return;
    }

    setAreaName('');
    setAreaQuirks('');
    setCommonEnemies('');
    setAreaInfo('');
  };

  function areaLog() {
    if (!localStorage.getItem('areaLogs')) {
      console.log('Creating storage for area based strategies...');
      const areaLogs = [];
      localStorage.setItem('areaLogs', JSON.stringify(areaLogs));
    }
    const id = String(Math.ceil(Math.random() * 999999));

    let area = {
      id: id,
      areaName: areaName,
      areaQuirks: areaQuirks,
      commonEnemies: commonEnemies,
      areaInfo: areaInfo,
    };

    const log = JSON.parse(window.localStorage.getItem('areaLogs'));

    if (preLoadedData != '') {
      const index = log.findIndex((el) => el.id == preLoadedData.id);
      log[index] = area;
      window.localStorage.setItem('areaLogs', JSON.stringify(log));
    } else {
      log.push(area);
      window.localStorage.setItem('areaLogs', JSON.stringify(log));
    }
  }

  return (
    <form className="form" id="area-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Area Name</label>
        <input
          type="text"
          placeholder="Limgrave"
          value={areaName}
          onChange={(e) => setAreaName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Area Quirks</label>
        <input
          type="text"
          placeholder="Vast and open area, with common ruins placed around."
          value={areaQuirks}
          onChange={(e) => setAreaQuirks(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Common Enemies</label>
        <input
          type="text"
          placeholder="Skeletons"
          value={commonEnemies}
          onChange={(e) => setCommonEnemies(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Area Info</label>
      </div>
      <textarea
        form="area-form"
        placeholder="Windy area, merchants are placed around as well as evergaols and bell bearing hunters"
        value={areaInfo}
        onChange={(e) => setAreaInfo(e.target.value)}
      ></textarea>
      <input type="submit" value="Save Area Log" className="btn btn-block" />
    </form>
  );
};
export default AreaForm;
