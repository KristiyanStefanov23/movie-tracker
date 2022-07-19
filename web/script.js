$(() => {
    $.ajax({
        url: 'https://kristiyanstefanov23.github.io/movie-tracker/data/watchData.json', success: (res) =>
            Object.entries(res).forEach(([key, value]) => {
                const tr = create('tr', $('#watchData')[0]);
                create('td', tr, key);
                Object.entries(value).forEach(([k, v]) => create('td', tr, typeof v == 'object' ? v.join() : v));
            })
    });
}); 