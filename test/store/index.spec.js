import { assert } from 'chai';
import data from 'bangumi-data';
import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { cloneDeep } from 'lodash';
import { state, mutations, getters, actions } from '../../store/index';

describe('Test store', () => {
    it('Test mutations init()', () => {
        const localVue = createLocalVue();
        localVue.use(Vuex);
        const store = new Vuex.Store(cloneDeep({
            state,
            mutations,
            getters,
            actions
        }));
        store.commit('init', data);
        assert.strictEqual(store.state.siteMeta, data.siteMeta, 'state.siteMeta strictEqual');
        assert.strictEqual(store.state.items, data.items, 'state.items strictEqual');
        assert.exists(store.state.dataMaps.yearMap, 'yearMap exists');
        assert.exists(store.state.dataMaps.yearKey, 'yearKey exists');
        assert.exists(store.state.dataMaps.yearMap[store.state.dataMaps.yearKey[0]], 'dataMaps[yearKey] exists');
        assert.exists(store.state.dataMaps.typeMap, 'typeMap exists');
        assert.exists(store.state.dataMaps.typeKey, 'typeKey exists');
        assert.exists(store.state.dataMaps.typeMap[store.state.dataMaps.typeKey[0]], 'typeMap[typeKey] exists');
        assert.exists(store.state.dataMaps.yearMonthMap, 'yearMonthMap exists');
        assert.exists(store.state.dataMaps.yearMonthKey, 'yearMonthKey exists');
        assert.exists(store.state.dataMaps.yearMonthMap['2019']['01'], 'yearMonthMap[year][month] exists');
    });

    it('Test mutations filter()', () => {
        const localVue = createLocalVue();
        localVue.use(Vuex);
        const store = new Vuex.Store(cloneDeep({
            state,
            mutations,
            getters,
            actions
        }));
        store.commit('init', data);
        store.commit('filter', { type: 'tv', year: '2019', month: '01' });
        const filterResult = store.state.filterResult;
        assert.equal(filterResult[0].type, 'tv', 'filter results is tv');
        assert.include(filterResult[0].begin, '2019', 'filter results is 2019');
        assert.include(filterResult[0].begin, '2019-01', 'filter results is 2019-01');
    });

    it('Test mutations search()', () => {
        const localVue = createLocalVue();
        localVue.use(Vuex);
        const store = new Vuex.Store(cloneDeep({
            state,
            mutations,
            getters,
            actions
        }));
        store.commit('init', data);
        store.commit('filter', { type: 'all', year: 'all', month: 'all' });
        store.commit('search', '老师');
        const searchResult = store.state.searchResult;
        assert.include(searchResult[0].titleTranslate['zh-Hans'][0], '老师', 'search results is 老师');
    });
});
