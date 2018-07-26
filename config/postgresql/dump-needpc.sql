--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.9
-- Dumped by pg_dump version 10.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


--
-- Name: hstore; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS hstore WITH SCHEMA public;


--
-- Name: EXTENSION hstore; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION hstore IS 'data type for storing sets of (key, value) pairs';


--
-- Name: enum_computers_disks_type; Type: TYPE; Schema: public; Owner: node
--

CREATE TYPE public.enum_computers_disks_type AS ENUM (
    'N/A',
    'HDD',
    'SSD'
);


ALTER TYPE public.enum_computers_disks_type OWNER TO node;

--
-- Name: enum_users_role; Type: TYPE; Schema: public; Owner: node
--

CREATE TYPE public.enum_users_role AS ENUM (
    'admin',
    'modo',
    'user'
);


ALTER TYPE public.enum_users_role OWNER TO node;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: node
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO node;

--
-- Name: computers; Type: TABLE; Schema: public; Owner: node
--

CREATE TABLE public.computers (
    id integer NOT NULL,
    os_id integer DEFAULT 1,
    brand_id integer DEFAULT 1,
    cpu_id integer DEFAULT 1,
    gpu_id integer DEFAULT 1,
    activity_id integer DEFAULT 1,
    chipset_id integer DEFAULT 1,
    picture character varying(512),
    designation character varying(256),
    model character varying(256) NOT NULL,
    connector_available character varying(2048),
    weight double precision,
    length double precision,
    width double precision,
    height double precision,
    memory_type character varying(128),
    memory_size double precision,
    memory_max_size double precision,
    keyboard_type character varying(128),
    keyboard_numpad boolean,
    keyboard_light boolean,
    screen_type character varying(256),
    screen_resolution character varying(256),
    screen_refresh_rate integer,
    screen_size double precision,
    screen_format character varying(16),
    network character varying(128),
    webcam boolean,
    active boolean DEFAULT true NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE public.computers OWNER TO node;

--
-- Name: computers_activities; Type: TABLE; Schema: public; Owner: node
--

CREATE TABLE public.computers_activities (
    id integer NOT NULL,
    name character varying(64) NOT NULL,
    description character varying(512)
);


ALTER TABLE public.computers_activities OWNER TO node;

--
-- Name: computers_activities_id_seq; Type: SEQUENCE; Schema: public; Owner: node
--

CREATE SEQUENCE public.computers_activities_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.computers_activities_id_seq OWNER TO node;

--
-- Name: computers_activities_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: node
--

ALTER SEQUENCE public.computers_activities_id_seq OWNED BY public.computers_activities.id;


--
-- Name: computers_brands; Type: TABLE; Schema: public; Owner: node
--

CREATE TABLE public.computers_brands (
    id integer NOT NULL,
    name character varying(128) NOT NULL,
    description character varying(512)
);


ALTER TABLE public.computers_brands OWNER TO node;

--
-- Name: computers_brands_id_seq; Type: SEQUENCE; Schema: public; Owner: node
--

CREATE SEQUENCE public.computers_brands_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.computers_brands_id_seq OWNER TO node;

--
-- Name: computers_brands_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: node
--

ALTER SEQUENCE public.computers_brands_id_seq OWNED BY public.computers_brands.id;


--
-- Name: computers_chipsets; Type: TABLE; Schema: public; Owner: node
--

CREATE TABLE public.computers_chipsets (
    id integer NOT NULL,
    name character varying(64) NOT NULL,
    description character varying(512)
);


ALTER TABLE public.computers_chipsets OWNER TO node;

--
-- Name: computers_chipsets_id_seq; Type: SEQUENCE; Schema: public; Owner: node
--

CREATE SEQUENCE public.computers_chipsets_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.computers_chipsets_id_seq OWNER TO node;

--
-- Name: computers_chipsets_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: node
--

ALTER SEQUENCE public.computers_chipsets_id_seq OWNED BY public.computers_chipsets.id;


--
-- Name: computers_cpus; Type: TABLE; Schema: public; Owner: node
--

CREATE TABLE public.computers_cpus (
    id integer NOT NULL,
    name character varying(128) NOT NULL,
    score integer,
    description character varying(512)
);


ALTER TABLE public.computers_cpus OWNER TO node;

--
-- Name: computers_cpus_id_seq; Type: SEQUENCE; Schema: public; Owner: node
--

CREATE SEQUENCE public.computers_cpus_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.computers_cpus_id_seq OWNER TO node;

--
-- Name: computers_cpus_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: node
--

ALTER SEQUENCE public.computers_cpus_id_seq OWNED BY public.computers_cpus.id;


--
-- Name: computers_disks; Type: TABLE; Schema: public; Owner: node
--

CREATE TABLE public.computers_disks (
    id integer NOT NULL,
    computer_id integer NOT NULL,
    type public.enum_computers_disks_type,
    size integer,
    interface character varying(1024)
);


ALTER TABLE public.computers_disks OWNER TO node;

--
-- Name: computers_disks_id_seq; Type: SEQUENCE; Schema: public; Owner: node
--

CREATE SEQUENCE public.computers_disks_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.computers_disks_id_seq OWNER TO node;

--
-- Name: computers_disks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: node
--

ALTER SEQUENCE public.computers_disks_id_seq OWNED BY public.computers_disks.id;


--
-- Name: computers_gpus; Type: TABLE; Schema: public; Owner: node
--

CREATE TABLE public.computers_gpus (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    score double precision,
    memory_type character varying(256),
    max_memory integer,
    description character varying(1024)
);


ALTER TABLE public.computers_gpus OWNER TO node;

--
-- Name: computers_gpus_id_seq; Type: SEQUENCE; Schema: public; Owner: node
--

CREATE SEQUENCE public.computers_gpus_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.computers_gpus_id_seq OWNER TO node;

--
-- Name: computers_gpus_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: node
--

ALTER SEQUENCE public.computers_gpus_id_seq OWNED BY public.computers_gpus.id;


--
-- Name: computers_id_seq; Type: SEQUENCE; Schema: public; Owner: node
--

CREATE SEQUENCE public.computers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.computers_id_seq OWNER TO node;

--
-- Name: computers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: node
--

ALTER SEQUENCE public.computers_id_seq OWNED BY public.computers.id;


--
-- Name: computers_os; Type: TABLE; Schema: public; Owner: node
--

CREATE TABLE public.computers_os (
    id integer NOT NULL,
    name character varying(128) NOT NULL,
    description character varying(128)
);


ALTER TABLE public.computers_os OWNER TO node;

--
-- Name: computers_os_id_seq; Type: SEQUENCE; Schema: public; Owner: node
--

CREATE SEQUENCE public.computers_os_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.computers_os_id_seq OWNER TO node;

--
-- Name: computers_os_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: node
--

ALTER SEQUENCE public.computers_os_id_seq OWNED BY public.computers_os.id;


--
-- Name: computers_prices; Type: TABLE; Schema: public; Owner: node
--

CREATE TABLE public.computers_prices (
    id integer NOT NULL,
    computer_id integer NOT NULL,
    trader_id integer NOT NULL,
    last_price integer NOT NULL,
    pricing public.hstore,
    url character varying(512),
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE public.computers_prices OWNER TO node;

--
-- Name: computers_prices_id_seq; Type: SEQUENCE; Schema: public; Owner: node
--

CREATE SEQUENCE public.computers_prices_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.computers_prices_id_seq OWNER TO node;

--
-- Name: computers_prices_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: node
--

ALTER SEQUENCE public.computers_prices_id_seq OWNED BY public.computers_prices.id;


--
-- Name: computers_quests; Type: TABLE; Schema: public; Owner: node
--

CREATE TABLE public.computers_quests (
    id integer NOT NULL,
    activity_id integer NOT NULL,
    rank integer NOT NULL,
    quest character varying(512) NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    active boolean DEFAULT true NOT NULL
);


ALTER TABLE public.computers_quests OWNER TO node;

--
-- Name: computers_quests_id_seq; Type: SEQUENCE; Schema: public; Owner: node
--

CREATE SEQUENCE public.computers_quests_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.computers_quests_id_seq OWNER TO node;

--
-- Name: computers_quests_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: node
--

ALTER SEQUENCE public.computers_quests_id_seq OWNED BY public.computers_quests.id;


--
-- Name: computers_quests_resps; Type: TABLE; Schema: public; Owner: node
--

CREATE TABLE public.computers_quests_resps (
    id integer NOT NULL,
    quest_id integer NOT NULL,
    resp character varying(64) NOT NULL,
    indice character varying(512)
);


ALTER TABLE public.computers_quests_resps OWNER TO node;

--
-- Name: computers_quests_resps_id_seq; Type: SEQUENCE; Schema: public; Owner: node
--

CREATE SEQUENCE public.computers_quests_resps_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.computers_quests_resps_id_seq OWNER TO node;

--
-- Name: computers_quests_resps_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: node
--

ALTER SEQUENCE public.computers_quests_resps_id_seq OWNED BY public.computers_quests_resps.id;


--
-- Name: computers_traders; Type: TABLE; Schema: public; Owner: node
--

CREATE TABLE public.computers_traders (
    id integer NOT NULL,
    name character varying(128) NOT NULL,
    description character varying(512)
);


ALTER TABLE public.computers_traders OWNER TO node;

--
-- Name: computers_traders_id_seq; Type: SEQUENCE; Schema: public; Owner: node
--

CREATE SEQUENCE public.computers_traders_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.computers_traders_id_seq OWNER TO node;

--
-- Name: computers_traders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: node
--

ALTER SEQUENCE public.computers_traders_id_seq OWNED BY public.computers_traders.id;


--
-- Name: computers id; Type: DEFAULT; Schema: public; Owner: node
--

ALTER TABLE ONLY public.computers ALTER COLUMN id SET DEFAULT nextval('public.computers_id_seq'::regclass);


--
-- Name: computers_activities id; Type: DEFAULT; Schema: public; Owner: node
--

ALTER TABLE ONLY public.computers_activities ALTER COLUMN id SET DEFAULT nextval('public.computers_activities_id_seq'::regclass);


--
-- Name: computers_brands id; Type: DEFAULT; Schema: public; Owner: node
--

ALTER TABLE ONLY public.computers_brands ALTER COLUMN id SET DEFAULT nextval('public.computers_brands_id_seq'::regclass);


--
-- Name: computers_chipsets id; Type: DEFAULT; Schema: public; Owner: node
--

ALTER TABLE ONLY public.computers_chipsets ALTER COLUMN id SET DEFAULT nextval('public.computers_chipsets_id_seq'::regclass);


--
-- Name: computers_cpus id; Type: DEFAULT; Schema: public; Owner: node
--

ALTER TABLE ONLY public.computers_cpus ALTER COLUMN id SET DEFAULT nextval('public.computers_cpus_id_seq'::regclass);


--
-- Name: computers_disks id; Type: DEFAULT; Schema: public; Owner: node
--

ALTER TABLE ONLY public.computers_disks ALTER COLUMN id SET DEFAULT nextval('public.computers_disks_id_seq'::regclass);


--
-- Name: computers_gpus id; Type: DEFAULT; Schema: public; Owner: node
--

ALTER TABLE ONLY public.computers_gpus ALTER COLUMN id SET DEFAULT nextval('public.computers_gpus_id_seq'::regclass);


--
-- Name: computers_os id; Type: DEFAULT; Schema: public; Owner: node
--

ALTER TABLE ONLY public.computers_os ALTER COLUMN id SET DEFAULT nextval('public.computers_os_id_seq'::regclass);


--
-- Name: computers_prices id; Type: DEFAULT; Schema: public; Owner: node
--

ALTER TABLE ONLY public.computers_prices ALTER COLUMN id SET DEFAULT nextval('public.computers_prices_id_seq'::regclass);


--
-- Name: computers_quests id; Type: DEFAULT; Schema: public; Owner: node
--

ALTER TABLE ONLY public.computers_quests ALTER COLUMN id SET DEFAULT nextval('public.computers_quests_id_seq'::regclass);


--
-- Name: computers_quests_resps id; Type: DEFAULT; Schema: public; Owner: node
--

ALTER TABLE ONLY public.computers_quests_resps ALTER COLUMN id SET DEFAULT nextval('public.computers_quests_resps_id_seq'::regclass);


--
-- Name: computers_traders id; Type: DEFAULT; Schema: public; Owner: node
--

ALTER TABLE ONLY public.computers_traders ALTER COLUMN id SET DEFAULT nextval('public.computers_traders_id_seq'::regclass);


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: node
--

COPY public."SequelizeMeta" (name) FROM stdin;
20180305103837-create-computers-brands.js
20180305103837-create-computers-traders.js
20180305111117-create-computers-os.js
20180305111943-create-computers-gpus.js
20180305125345-create-computers-cpus.js
20180305125408-create-computers-chipsets.js
20180305125425-create-computers-activities.js
20180305125439-create-computers.js
20180515135620-create-computers-disks.js
20180305104623-create-computers-quests.js
20180305105733-create-computers-quests-resps.js
20180305110501-create-computers-prices.js
\.


--
-- Data for Name: computers; Type: TABLE DATA; Schema: public; Owner: node
--

COPY public.computers (id, os_id, brand_id, cpu_id, gpu_id, activity_id, chipset_id, picture, designation, model, connector_available, weight, length, width, height, memory_type, memory_size, memory_max_size, keyboard_type, keyboard_numpad, keyboard_light, screen_type, screen_resolution, screen_refresh_rate, screen_size, screen_format, network, webcam, active, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: computers_activities; Type: TABLE DATA; Schema: public; Owner: node
--

COPY public.computers_activities (id, name, description) FROM stdin;
1	N/A	\N
2	Gamer	Grand joueur de AAA ? Cette categorie est faite pour vous !
3	Bureautique	Vous utilisez votre machine pour naviguer, faire vos comptes ? Choisissez cette categorie !
4	Graphiste/Montage Video	Un amateur retouche d'images ou videos ?
\.


--
-- Data for Name: computers_brands; Type: TABLE DATA; Schema: public; Owner: node
--

COPY public.computers_brands (id, name, description) FROM stdin;
1	N/A	\N
2	Aucune	\N
\.


--
-- Data for Name: computers_chipsets; Type: TABLE DATA; Schema: public; Owner: node
--

COPY public.computers_chipsets (id, name, description) FROM stdin;
1	N/A	\N
\.


--
-- Data for Name: computers_cpus; Type: TABLE DATA; Schema: public; Owner: node
--

COPY public.computers_cpus (id, name, score, description) FROM stdin;
1	N/A	\N	\N
\.


--
-- Data for Name: computers_disks; Type: TABLE DATA; Schema: public; Owner: node
--

COPY public.computers_disks (id, computer_id, type, size, interface) FROM stdin;
\.


--
-- Data for Name: computers_gpus; Type: TABLE DATA; Schema: public; Owner: node
--

COPY public.computers_gpus (id, name, score, memory_type, max_memory, description) FROM stdin;
1	N/A	\N	\N	\N	\N
2	Aucune	\N	\N	\N	\N
\.


--
-- Data for Name: computers_os; Type: TABLE DATA; Schema: public; Owner: node
--

COPY public.computers_os (id, name, description) FROM stdin;
1	N/A	\N
2	Aucun	\N
3	Windows	\N
4	MacOS	\N
\.


--
-- Data for Name: computers_prices; Type: TABLE DATA; Schema: public; Owner: node
--

COPY public.computers_prices (id, computer_id, trader_id, last_price, pricing, url, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: computers_quests; Type: TABLE DATA; Schema: public; Owner: node
--

COPY public.computers_quests (id, activity_id, rank, quest, created_at, updated_at, active) FROM stdin;
1	1	1	Quelle utilisation faites-vous de votre ordinateur ?	2018-07-26 09:39:58.812941+00	2018-07-26 09:39:58.812941+00	t
2	2	2	A quel type de jeu jouez-vous ?	2018-07-26 09:39:58.812941+00	2018-07-26 09:39:58.812941+00	t
3	3	2	Quels logiciels/sites utilisez vous ?	2018-07-26 09:39:58.812941+00	2018-07-26 09:39:58.812941+00	t
4	4	2	Quels logiciels utilisez-vous pour faire vos montage ?	2018-07-26 09:39:58.812941+00	2018-07-26 09:39:58.812941+00	t
5	1	3	Quel taille d'écran désirez-vous ?	2018-07-26 09:39:58.812941+00	2018-07-26 09:39:58.812941+00	t
6	1	3	Quel systeme d'exploitation preferez vous ?	2018-07-26 09:39:58.812941+00	2018-07-26 09:39:58.812941+00	t
7	1	5	Quel est votre budget ?	2018-07-26 09:39:58.812941+00	2018-07-26 09:39:58.812941+00	t
8	1	4	Quel poids maximum acceptez vous ?	2018-07-26 09:39:58.812941+00	2018-07-26 09:39:58.812941+00	t
9	2	4	Quelle est la qualité graphique minimum souhaitez-vous ?	2018-07-26 09:39:58.812941+00	2018-07-26 09:39:58.812941+00	t
\.


--
-- Data for Name: computers_quests_resps; Type: TABLE DATA; Schema: public; Owner: node
--

COPY public.computers_quests_resps (id, quest_id, resp, indice) FROM stdin;
1	1	Jouer	activity=2
2	1	Bureautique	activity=3
3	1	Multimédia	activity=2&activity=4
4	2	Assassin's Creed	cpu_score_min=8500&cpu_score_max=12500
5	2	Minecraft	cpu_score_min=6500&cpu_score_max=8500
6	2	Vermintide 2	cpu_score_min=7500&cpu_score_max=10500
7	3	Google Chrome (ou autre)	cpu_score_min=7000&cpu_score_max=8700
8	3	VLC	cpu_score_min=6000&cpu_score_max=8000
9	3	Netflix (Streaming)	cpu_score_min=5000&cpu_score_min=8000
10	3	Microsoft Office	cpu_score_min=4000&cpu_score_max=6500
11	3	Tous	cpu_score_min=9300&cpu_score_min=11000
12	4	Adobe Photoshop	cpu_score_min=8700&cpu_score_max=12000
13	4	Adobe Premiere	cpu_score_min=9500&cpu_score_max=14500
14	4	Cubase	cpu_score_min=7700&cpu_score_max=9000
15	5	13 pouces	screen=13
16	5	15 pouces	screen=15
17	5	17 pouces	screen=17&screen=17.3
18	6	Peu importe	\N
19	6	Macintosh (Apple)	os_id=21
20	6	Windows (Microsoft)	os_id=2
21	7	Moins de 500€	price_min=0&price_max=500
22	7	Entre 500€ et 1000€	price_min=500&price_max=900
23	7	1000€ et 1500€	price_min=1000&price_max=1500
24	7	Plus de 1500€	price_min=1500&price_max=20000
25	8	moins de 1.2 kg	weight_min=0.7&weight_max=1.2
26	8	moins de 2.0 kg	weight_min=1&weight_max=2
27	8	moins de 3.0 kg	weight_min=1.8&weight_max=3
28	8	Peu importe	\N
29	9	Minimum	gpu_score_min=2&gpu_score_max=7
30	9	Moyen	gpu_score_min=8&gpu_score_max=12
31	9	Haut	gpu_score_min=13&gpu_score_max=22
32	9	Ultra	gpu_score_min=22&gpu_score_max=100
33	1	Jouer	2
\.


--
-- Data for Name: computers_traders; Type: TABLE DATA; Schema: public; Owner: node
--

COPY public.computers_traders (id, name, description) FROM stdin;
1	N/A	\N
2	TopAchat	\N
3	LDLC	\N
4	Fnac	\N
5	Materiel.NET	\N
\.


--
-- Name: computers_activities_id_seq; Type: SEQUENCE SET; Schema: public; Owner: node
--

SELECT pg_catalog.setval('public.computers_activities_id_seq', 4, true);


--
-- Name: computers_brands_id_seq; Type: SEQUENCE SET; Schema: public; Owner: node
--

SELECT pg_catalog.setval('public.computers_brands_id_seq', 2, true);


--
-- Name: computers_chipsets_id_seq; Type: SEQUENCE SET; Schema: public; Owner: node
--

SELECT pg_catalog.setval('public.computers_chipsets_id_seq', 1, true);


--
-- Name: computers_cpus_id_seq; Type: SEQUENCE SET; Schema: public; Owner: node
--

SELECT pg_catalog.setval('public.computers_cpus_id_seq', 1, true);


--
-- Name: computers_disks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: node
--

SELECT pg_catalog.setval('public.computers_disks_id_seq', 1, false);


--
-- Name: computers_gpus_id_seq; Type: SEQUENCE SET; Schema: public; Owner: node
--

SELECT pg_catalog.setval('public.computers_gpus_id_seq', 2, true);


--
-- Name: computers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: node
--

SELECT pg_catalog.setval('public.computers_id_seq', 1, false);


--
-- Name: computers_os_id_seq; Type: SEQUENCE SET; Schema: public; Owner: node
--

SELECT pg_catalog.setval('public.computers_os_id_seq', 4, true);


--
-- Name: computers_prices_id_seq; Type: SEQUENCE SET; Schema: public; Owner: node
--

SELECT pg_catalog.setval('public.computers_prices_id_seq', 1, false);


--
-- Name: computers_quests_id_seq; Type: SEQUENCE SET; Schema: public; Owner: node
--

SELECT pg_catalog.setval('public.computers_quests_id_seq', 9, true);


--
-- Name: computers_quests_resps_id_seq; Type: SEQUENCE SET; Schema: public; Owner: node
--

SELECT pg_catalog.setval('public.computers_quests_resps_id_seq', 33, true);


--
-- Name: computers_traders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: node
--

SELECT pg_catalog.setval('public.computers_traders_id_seq', 5, true);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: node
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: computers_activities computers_activities_pkey; Type: CONSTRAINT; Schema: public; Owner: node
--

ALTER TABLE ONLY public.computers_activities
    ADD CONSTRAINT computers_activities_pkey PRIMARY KEY (id);


--
-- Name: computers_brands computers_brands_pkey; Type: CONSTRAINT; Schema: public; Owner: node
--

ALTER TABLE ONLY public.computers_brands
    ADD CONSTRAINT computers_brands_pkey PRIMARY KEY (id);


--
-- Name: computers_chipsets computers_chipsets_pkey; Type: CONSTRAINT; Schema: public; Owner: node
--

ALTER TABLE ONLY public.computers_chipsets
    ADD CONSTRAINT computers_chipsets_pkey PRIMARY KEY (id);


--
-- Name: computers_cpus computers_cpus_pkey; Type: CONSTRAINT; Schema: public; Owner: node
--

ALTER TABLE ONLY public.computers_cpus
    ADD CONSTRAINT computers_cpus_pkey PRIMARY KEY (id);


--
-- Name: computers_disks computers_disks_pkey; Type: CONSTRAINT; Schema: public; Owner: node
--

ALTER TABLE ONLY public.computers_disks
    ADD CONSTRAINT computers_disks_pkey PRIMARY KEY (id);


--
-- Name: computers_gpus computers_gpus_pkey; Type: CONSTRAINT; Schema: public; Owner: node
--

ALTER TABLE ONLY public.computers_gpus
    ADD CONSTRAINT computers_gpus_pkey PRIMARY KEY (id);


--
-- Name: computers_os computers_os_pkey; Type: CONSTRAINT; Schema: public; Owner: node
--

ALTER TABLE ONLY public.computers_os
    ADD CONSTRAINT computers_os_pkey PRIMARY KEY (id);


--
-- Name: computers computers_pkey; Type: CONSTRAINT; Schema: public; Owner: node
--

ALTER TABLE ONLY public.computers
    ADD CONSTRAINT computers_pkey PRIMARY KEY (id);


--
-- Name: computers_prices computers_prices_pkey; Type: CONSTRAINT; Schema: public; Owner: node
--

ALTER TABLE ONLY public.computers_prices
    ADD CONSTRAINT computers_prices_pkey PRIMARY KEY (id);


--
-- Name: computers_quests computers_quests_pkey; Type: CONSTRAINT; Schema: public; Owner: node
--

ALTER TABLE ONLY public.computers_quests
    ADD CONSTRAINT computers_quests_pkey PRIMARY KEY (id);


--
-- Name: computers_quests_resps computers_quests_resps_pkey; Type: CONSTRAINT; Schema: public; Owner: node
--

ALTER TABLE ONLY public.computers_quests_resps
    ADD CONSTRAINT computers_quests_resps_pkey PRIMARY KEY (id);


--
-- Name: computers_traders computers_traders_pkey; Type: CONSTRAINT; Schema: public; Owner: node
--

ALTER TABLE ONLY public.computers_traders
    ADD CONSTRAINT computers_traders_pkey PRIMARY KEY (id);


--
-- Name: computers computers_activity_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: node
--

ALTER TABLE ONLY public.computers
    ADD CONSTRAINT computers_activity_id_fkey FOREIGN KEY (activity_id) REFERENCES public.computers_activities(id);


--
-- Name: computers computers_brand_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: node
--

ALTER TABLE ONLY public.computers
    ADD CONSTRAINT computers_brand_id_fkey FOREIGN KEY (brand_id) REFERENCES public.computers_brands(id);


--
-- Name: computers computers_chipset_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: node
--

ALTER TABLE ONLY public.computers
    ADD CONSTRAINT computers_chipset_id_fkey FOREIGN KEY (chipset_id) REFERENCES public.computers_chipsets(id);


--
-- Name: computers computers_cpu_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: node
--

ALTER TABLE ONLY public.computers
    ADD CONSTRAINT computers_cpu_id_fkey FOREIGN KEY (cpu_id) REFERENCES public.computers_cpus(id);


--
-- Name: computers_disks computers_disks_computer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: node
--

ALTER TABLE ONLY public.computers_disks
    ADD CONSTRAINT computers_disks_computer_id_fkey FOREIGN KEY (computer_id) REFERENCES public.computers(id);


--
-- Name: computers computers_gpu_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: node
--

ALTER TABLE ONLY public.computers
    ADD CONSTRAINT computers_gpu_id_fkey FOREIGN KEY (gpu_id) REFERENCES public.computers_gpus(id);


--
-- Name: computers computers_os_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: node
--

ALTER TABLE ONLY public.computers
    ADD CONSTRAINT computers_os_id_fkey FOREIGN KEY (os_id) REFERENCES public.computers_os(id);


--
-- Name: computers_prices computers_prices_computer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: node
--

ALTER TABLE ONLY public.computers_prices
    ADD CONSTRAINT computers_prices_computer_id_fkey FOREIGN KEY (computer_id) REFERENCES public.computers(id);


--
-- Name: computers_prices computers_prices_trader_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: node
--

ALTER TABLE ONLY public.computers_prices
    ADD CONSTRAINT computers_prices_trader_id_fkey FOREIGN KEY (trader_id) REFERENCES public.computers_traders(id);


--
-- Name: computers_quests computers_quests_activity_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: node
--

ALTER TABLE ONLY public.computers_quests
    ADD CONSTRAINT computers_quests_activity_id_fkey FOREIGN KEY (activity_id) REFERENCES public.computers_activities(id);


--
-- Name: computers_quests_resps computers_quests_resps_quest_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: node
--

ALTER TABLE ONLY public.computers_quests_resps
    ADD CONSTRAINT computers_quests_resps_quest_id_fkey FOREIGN KEY (quest_id) REFERENCES public.computers_quests(id);


--
-- PostgreSQL database dump complete
--

