import { documentPage } from '@/langs/ru/pages/document';

export default {
  stock: 'Акция',
  stocksDynamic: 'Динамика акций',
  monthlyIncrease: 'Прирост за месяц',
  yearIncrease: 'Прирост за год',
  yearThreeIncrease: 'Прирост за 3 года',
  assetsList: {
    stockRu: 'Список акций Мосбиржи',
    stockEn: 'Список американских акций на Санкт-Петербургской бирже',
    bond: 'Список облигаций',
    etf: 'Список ETF Мосбиржи',
    indexes: 'Список индексов',
  },
  page: {
    document: {
      ...documentPage,
    },
  },
  progresses: {
    revenue: 'Выручка',
    profit: 'Прибыль',
    profitability: 'Рентабельность',
    fraction: 'Доля',
    profitRatio: 'P/E',
    beta: 'Бета',
    capitalization: 'Капитализация',
    dividends: 'Дивиденды',
  },
  sitenav: {
    training: 'Обучение',
    services: 'Сервисы',
    blog: 'Блог',
    assets: 'Активы',
    about: 'О нас',
  },
  securityHeader: {
    bond: {
      name: 'Облигация',
      date: 'находится в обращении с',
      emitent: 'Эмитентом облигации является',
    },
    stock: {
      name: 'Акция',
      ticker: 'тикер акции',
      date: 'находится в обращении с',
      emitent: 'Эмитентом облигации является',
      dynamics: {
        text: 'Динамика акций:',
        month: 'Прирост за месяц',
        year: 'Прирост за год',
        three_years: 'Прирост за 3 года',
      },
    },
  },
  tableTexts: {
    alertText: 'Данные в таблице указаны в млн. руб.',
    switcherText: 'Среднеотраслевые показатели',
    index: 'Показатель',
  },
  aboutCompany: {
    newsText:
      'Конечно, выбор акций для инвестирования прежде всего зависит от целей самого инвестора. Кто-то стремится к максимально агрессивному росту портфеля и готов терпеть соответствующие этому риски, кто-то, наоборот, предельно консервативен и готов идти только на очень выверенный и небольшой риск, а для какого-то инвестора важен денежный поток, который будет генерировать инвестиционный портфель, который можно будет выводить на текущее потребление в виде «живого» кэша.',
  },
  aboutStock: [
    {
      name: 'Тип акции:',
      path: 'PROP_TIP_AKTSII',
    },
    {
      name: 'Сектор:',
      path: 'PROP_SEKTOR',
    },
    {
      name: 'ISIN-код:',
      path: 'ISIN',
    },
    {
      name: 'Количество акций в слоте:',
      path: 'LOTSIZE',
    },
    {
      name: 'Доля экспорта:',
      path: 'PROP_EXPORT_SHARE',
    },
    {
      name: 'Операции Short:',
      path: 'PROP_SHORT',
    },
  ],
  bonds: {
    isin: 'ISIN:',
    currentPrice: 'Текущая цена:',
    totalValue: 'Общая доходность:',
  },
  discussion: {
    commentText:
      'Значит, когда решили пересадить население на безнал это получилось за каких-то 10 лет. И мировая история карт никак не повлияла на цифровизацию финансов. Так же отсутствие института биржевой торговли никак не помешало за каких-то 5-7 лет в 90-ых перейти от торговли в "ямах" в ручном режиме на полностью цифровую торговлю. А вот ETF оказывается очень сложная тема. Маленький спрос, непродолжительная история, ну-ну. Суть в том, что ПИФы кратно дороже для конечного потребителя чем ETF, а пока финансовая грамотность на нуле можно легально продавать непонятные продукты с огромной маржой. Если завести на московскую биржу нормальные ETF с мизерными комиссиями, то никто не будет покупать дичь от брокеров. Более того, та самая история зарубежных рынков играет только против местных провайдеров, так как они не могут конкурировать ни по истории, ни по политической стабильности, ни по стоимости владения. В общем текущая ситуация это самый обычный протекционизм, который прикрывается надуманными поводами.',
    comments: 'Комментарии',
    showMore: 'Показать больше',
    reply: 'Ответить',
    send: 'Отправить',
  },
  dividends: {
    methodLabel: 'Методика расчетов дивидендов:',
    methodText:
      'Не менее 25% от ЧП по МСФО. Если соотношение «Чистый долг/ скорректир. EBITDA» менее или равно 5.5, при этом EBITDA скорректирована на курсовые разницы. Изменения в резервах и прочие неденежные и нерегулярные статьи.',
    tableHeaders: [
      'Закрытие реестра',
      'Закрытие реестра Т-2',
      'Цена на закрытие реестра Т-2',
      'Дивиденды (₽)',
      'Дивиденды (%)',
    ],
    currentValue: 'Текущая цена',
  },
  companyIndicators: {
    quarter: 'кв.',
    tableRows: {
      quotes: {
        name: 'Котировки',
      },
      assets: {
        name: 'Активы',
        alert: 'true',
      },
      currentAssets: {
        name: 'Оборотные активы',
        alert: '',
      },
      equityCapital: {
        name: 'Собственный капитал',
        alert: 'true',
      },
      revenueLastYear: {
        name: 'Выручка прошлый год',
        alert: 'true',
      },
      revenueYearRolling: {
        name: 'Выручка за год (скользящая)',
        alert: '',
      },
      pastCapitalization: {
        name: 'Прошлая капитализация',
        alert: '',
      },
      currentRevenue: {
        name: 'Выручка тек.',
        alert: 'true',
      },
      quarterlyRevenue: {
        name: 'Выручка квартальная',
        alert: '',
      },
      shareEquityAssets: {
        name: 'Доля собственного капитала в активах',
        alert: '',
      },
      profit: {
        name: 'Прибыль',
        alert: '',
      },
      profitYearRolling: {
        name: 'Прибыль за год (скользящая)',
        alert: '',
      },
      quarterlyProfit: {
        name: 'Прибыль квартальная',
        alert: '',
      },
      returnOnEquity: {
        name: 'Рентабельность собственного капитала',
        alert: '',
      },
      revenueGrowthRate: {
        name: 'Темп прироста выручки',
        alert: '',
      },
      assetGrowthRate: {
        name: 'Темп роста активов',
        alert: '',
      },
      profitGrowthRate: {
        name: 'Темп роста прибыли',
        alert: '',
      },
    },
    tableProps: {
      year: {
        name: 'Год',
        default: true,
      },
      quarter: {
        name: 'Квартал',
      },
    },
  },
};
