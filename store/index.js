import { dateStringToYearString, dateStringToMonthString } from '../utils/dateTools';
import { log } from '../utils/logger';

export const state = () => ({
    siteMeta: {},
    items: [],
    dataMaps: {},
    searchResult: [],
    filterResult: []
});

export const getters = {
};

export const mutations = {
    init (state, data) {
        state.siteMeta = data.siteMeta;
        state.items = data.items;
        const yearMap = {};
        const yearKey = [];
        const typeKey = [];
        const typeMap = {};
        const yearMonthMap = {};
        const yearMonthKey = {};
        state.items.forEach((element) => {
            const year = dateStringToYearString(element.begin);
            const month = dateStringToMonthString(element.begin);
            if (typeof yearMap[year] === 'undefined') {
                yearMap[year] = [];
                yearKey.push(year);
            }
            yearMap[year].push(element);
            if (typeof yearMonthMap[year] === 'undefined') {
                yearMonthMap[year] = {};
                yearMonthKey[year] = [];
            }
            if (typeof yearMonthMap[year][month] === 'undefined') {
                yearMonthMap[year][month] = [];
                yearMonthKey[year].push(month);
            }
            yearMonthMap[year][month].push(element);
            yearMap[year].push(element);
            if (typeof typeMap[element.type] === 'undefined') {
                typeMap[element.type] = [];
                typeKey.push(element.type);
            }
            typeMap[element.type].push(element);
        });
        state.dataMaps = {
            yearMap,
            yearKey,
            typeMap,
            typeKey,
            yearMonthMap,
            yearMonthKey
        };
    },
    search (state, keyward) {
        state.searchResult = state.filterResult.filter((element) => {
            if (element.title.includes(keyward)) {
                return true;
            } else if (element.titleTranslate['zh-Hans']) {
                for (let i = 0; i < element.titleTranslate['zh-Hans'].length; i++) {
                    if (element.titleTranslate['zh-Hans'][i].includes(keyward)) {
                        return true;
                    }
                }
            } else if (element.titleTranslate['zh-Hant']) {
                for (let i = 0; i < element.titleTranslate['zh-Hant'].length; i++) {
                    if (element.titleTranslate['zh-Hant'][i].includes(keyward)) {
                        return true;
                    }
                }
            } else if (element.titleTranslate.en) {
                for (let i = 0; i < element.titleTranslate.en.length; i++) {
                    if (element.titleTranslate.en[i].includes(keyward)) {
                        return true;
                    }
                }
            }
            return false;
        });
    },
    filter (state, data) {
        const filterType = data.type || 'all';
        const filterYear = data.year || 'all';
        const filterMonth = data.month || 'all';
        log(`过滤条件：\ntype:${filterType}\nyear:${filterYear}\nmonth:${filterMonth}`);
        let baseFilterMap = [];
        if (filterMonth !== 'all') {
            if (filterYear === 'all') {
                throw new Error('调用filter时如果指定month则year不能为all');
            }
            baseFilterMap = state.dataMaps.yearMonthMap[filterYear][filterMonth];
        } else if (filterYear !== 'all') {
            baseFilterMap = state.dataMaps.yearMap[filterYear];
        } else if (filterType === 'all') {
            this.state.filterResult = state.items;
            return;
        }
        this.state.filterResult = baseFilterMap.filter((element) => {
            if (element.type === filterType) {
                return true;
            } else {
                return false;
            }
        });
    }
};

export const actions = {
};
