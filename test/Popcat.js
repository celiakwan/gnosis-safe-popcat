const { expect } = require('chai');

describe('Popcat', () => {
    let popcat;

    before(async () => {
        const Popcat = await ethers.getContractFactory('Popcat');
        popcat = await Popcat.deploy();
    });

    it('Popcat champion should be expected', async () => {
        const champion = 'Hong Kong';
        await popcat.updateChampion(champion);
        const result = await popcat.getChampion();
        expect(result).to.equal(champion);
    });
});