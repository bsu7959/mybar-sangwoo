create database mybar;

use mybar;

create table tb_member(
	m_idx bigint auto_increment primary key,
    m_email varchar(50) not null,
    m_favorite text not null,
    m_shelf text not null,
    m_settings text not null
);

create table tb_cocktail(
	c_idx bigint auto_increment primary key,
    c_name varchar(50) not null,
    c_desc text not null,
    c_recipe text not null,
    c_ing1 varchar(30) not null,
    c_ing2 varchar(30),
    c_ing3 varchar(30),
    c_ing4 varchar(30),
    c_ing5 varchar(30),
    c_ing6 varchar(30),
    c_ing7 varchar(30),
    c_ing8 varchar(30),
    c_ing9 varchar(30),
    c_ing10 varchar(30),
    c_gar1 varchar(30),
    c_gar2 varchar(30),
    c_gar3 varchar(30),
    c_measure1 varchar(30) not null,
    c_measure2 varchar(30),
    c_measure3 varchar(30),
    c_measure4 varchar(30),
    c_measure5 varchar(30),
    c_measure6 varchar(30),
    c_measure7 varchar(30),
    c_measure8 varchar(30),
    c_measure9 varchar(30),
    c_measure10 varchar(30),
    c_meaGar1 varchar(30),
    c_meaGar2 varchar(30),
    c_meaGar3 varchar(30),
    c_img varchar(50) not null
);

create table tb_ingredients(
	i_idx bigint auto_increment primary key,
    i_name varchar(30) not null,
    i_desc text not null,
    i_tag1 varchar(30),
    i_tag2 varchar(30),
    i_tag3 varchar(30),
    i_img varchar(50) not null
);

create table tb_recipe(
	r_cidx bigint not null,
    r_iidx bigint not null,
	foreign key(r_cidx) references tb_cocktail(c_idx) on delete cascade,
    foreign key(r_iidx) references tb_ingredients(i_idx) on delete cascade
);

create table tb_shelf(
	s_midx bigint not null,
    s_iidx bigint not null,
	foreign key(s_midx) references tb_member(m_idx) on delete cascade,
    foreign key(s_iidx) references tb_ingredients(i_idx) on delete cascade
);

select * from tb_member;
select * from tb_cocktail;
select * from tb_ingredients;
select * from tb_recipe;
select * from tb_shelf;

select * from
	(select * from (
		select * from tb_cocktail left join tb_ingredients on c_ing1 = i_name
	)a left join tb_ingredients on a.c_ing2 = tb_ingredients.i_name)b 
    left join tb_ingredients on b.c_ing3 = tb_ingredients.i_name where b.c_idx=3;

select r_iidx, i_name, i_img from (
select * from tb_recipe where r_cidx=3
)a left join tb_ingredients on a.r_iidx = i_idx order by r_iidx asc;

select c_name, c_img from (
select * from tb_recipe where r_iidx=10
)a left join tb_cocktail on a.r_cidx = c_idx order by r_cidx asc;


(select * from tb_ingredients where i_idx=5 or i_idx=6 or i_idx=8);

drop table tb_member;
drop table tb_cocktail;