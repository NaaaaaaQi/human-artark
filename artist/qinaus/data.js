/**
 * QINAUS PORTFOLIO — Content Data
 * ─────────────────────────────────────────────────────────
 * Edit this file when your website content changes.
 * Do NOT edit index.html unless you want to change the layout/design.
 *
 * Image URLs: use Squarespace CDN URLs from your site.
 * Descriptions: plain text or HTML (<em>, <br><br>, etc.)
 * Layout types per page:
 *   "hero"              — full-bleed image + description below
 *   "hero-multicolumn"  — full-bleed image + multi-column paragraphs (array)
 *   "grid-2-then-1"     — 2 artworks side-by-side, then 1 full-width below (mark last with fullWidth:true)
 *   "grid-2x2"          — 2×2 grid of artworks
 *   "grid-1full+2"      — 1 full-width artwork (fullWidth:true), then 2 side-by-side
 *   "sidebar"           — 1 tall artwork left (tall:true) + stacked artworks right
 *   "grid-2+1wide"      — 2 side-by-side, then 1 full-width below (mark last with fullWidth:true)
 */

const CDN = 'https://images.squarespace-cdn.com/content/v1/6a14ca8d2ea87702531db180/';

const PORTFOLIO = {

  // ── Artist Info ──────────────────────────────────────────
  artist: {
    name:      'Qinaus',
    subtitle:  'Contemporary Oil Painter',
    location:  'San Francisco, California',
    website:   'www.qinaus.com',
    email:     'qina0612@gmail.com',
    instagram: '@qinaus_',
    year:      '2026',
    quote:     'The canvas is not the opposite of logic, but a broader experimental field — one in which emotion and logic, consciousness and behavior, become a fluid, observable form of life energy.'
  },

  // ── Cover ────────────────────────────────────────────────
  cover: {
    imageUrl: CDN + '985223bb-73a4-41bc-a85f-83d4c9865601/Screenshot+2026-05-25+at+6.31.41%E2%80%AFPM.png'
  },

  // ── Artist Statement ─────────────────────────────────────
  statement: {
    paragraphs: [
      'Qinaus is a contemporary oil painter based in San Francisco, California.',
      'She holds a degree in Electrical Engineering from Harbin Institute of Technology and spent a decade working as a product manager at major technology companies.',
      'Her primary artistic mediums are painting and film.',
      'In her artistic practice, Qinaus explores how complex states of consciousness and patterns of human behavior can be translated into visual structures. Her work is guided by a central question:'
    ],
    pullquote: 'What can only be seen from the threshold?',
    closing:   'Her paintings investigate experiences that exist at moments of transition and between states of being — conscious and unconscious, past and future, dream and reality, observer and observed. Within these intersections, perception, memory, and choice are transformed into symbolic visual languages, emerging as ever-shifting relationships and forces.'
  },

  // ── CV ───────────────────────────────────────────────────
  cv: {
    education: [
      { years: '2011–2015', detail: 'Bachelor of Science, Electrical Engineering, Harbin Institute of Technology, China' }
    ],
    exhibitions: [
      { years: '2026', detail: '<em>"Life Flow,"</em> New York Design Week Group Exhibition, New York, NY' },
      { years: '2026', detail: '<em>"Whispers of the Heartsea,"</em> Pacific Art League Group Exhibition, Palo Alto, CA' }
    ],
    studios: [
      { years: '2026–',      detail: 'SF Artists Studios, Dogpatch / American Industrial Center, San Francisco, CA' },
      { years: '2022–2025',  detail: 'Independent Studio Practice, San Francisco, CA' }
    ],
    professional: [
      { years: '2018–2025', detail: 'Product Lead (Monetization), ByteDance' },
      { years: '2015–2018', detail: 'Product Lead, Sohu New Media Technology Co., Ltd.' }
    ]
  },

  // ── Series ───────────────────────────────────────────────
  series: [

    // ── Series I: Life Flow ──────────────────────────────
    {
      num:  'I',
      name: 'Life Flow',
      pages: [
        {
          layout: 'hero',
          artwork: {
            title:    'Life Flow',
            meta:     'Oil on Canvas · 2025',
            imageUrl: CDN + '6c0bf380-faf9-46c3-8c7b-10b0a3bbd3cc/Screenshot+2026-05-25+at+3.50.35%E2%80%AFPM.png',
            description: `Life Flow is a multi-perspective painting. The blue seagulls represent us as observers: we see their sideward flight in formation, their dives, and the blue sphere of speed created by the motion of their wings as they face us. From the perspective of the seagulls, we can see the schools of koi moving beneath the water, along with the green landscape and the surface of the water transformed by the sensation of high-speed flight. From the perspective of the koi, the water itself becomes green, where underwater plants and the reflections of riverside trees merge together into one flowing image.<br><br>And as viewers standing before the painting, we are ultimately able to see one another through these different gazes and perspectives.`
          }
        },
        {
          layout: 'grid-2-then-1',
          artworks: [
            {
              title:    'White Christmas Tree',
              meta:     'Oil on Canvas · Christmas Eve, 2025',
              imageUrl: CDN + '1a20e7b7-5a01-411b-a6ee-9e3cf94aa9f8/Screenshot+2026-05-25+at+7.33.11%E2%80%AFPM.png',
              description: `<em>White Christmas Tree</em> was created on Christmas Eve in 2025. The white figure within the painting appears both as a Christmas tree and as a girl opening her arms in an embrace. Standing within a radiant and flowing cosmic space, she seems to welcome destiny, the unknown, and all that is yet to arrive.<br><br>In this work, I attempt to reverse the relationship between "reality" and "void." The universe, often perceived as empty, emerges here as vivid and intensely alive; meanwhile, the human figure — which should possess the strongest sense of physical presence — dissolves into a white phantom-like silhouette, like a fading trace of consciousness.<br><br>This dissolution is not destruction, but rather a form of acceptance that arises after relinquishing control. As the self becomes lighter, the boundary between human existence and the world begins to blur. The Christmas tree therefore ceases to function merely as a symbol of the holiday, and instead becomes a psychological state — a way of remaining open-armed before loneliness, uncertainty, and fate itself.`
            },
            {
              title:    'Whispers of the Heartsea',
              meta:     'Oil on Canvas · 2024',
              imageUrl: CDN + 'c8e4b994-0005-4053-ab21-fe4ad8ddf325/Screenshot+2026-05-25+at+7.33.26%E2%80%AFPM.png',
              description: `This work was inspired by the coastline along California's Highway 1. The vivid pink tones come from the wildflowers growing near the shore, while the ocean is composed of layered blues, grays, and greens. Sea plants appear and disappear beneath the moving waves, as the distant horizon gradually dissolves into the sky.<br><br>Rather than simply depicting a landscape, the painting reflects an inner emotional space. The ocean becomes a metaphor for the "inner sea" — carrying feelings, memories, and quiet emotions that cannot be fully expressed through words.`
            },
            {
              title:    'Always By Your Side',
              meta:     'Oil on Canvas · 2025 · Santa Cruz, California',
              imageUrl: CDN + '1bd46b8e-cb56-40a3-a3ed-2a4e8bf20387/Screenshot+2026-05-25+at+7.33.41%E2%80%AFPM.png',
              fullWidth: true,
              description: `This work was created in Santa Cruz, California, inspired by the pink sunsets that often appear along the boardwalk after dusk.<br><br>The lavender-pink horizon unfolds like an open embrace, carrying a quiet yet immense sense of love. The moon appears as the gentle face of a girl, while the surrounding sky expands into a presence that feels both tender and powerful.<br><br>Beneath the moonlight, the ocean becomes simultaneously deep and weightless. Fragments of reflected light drift across the dark water like emotional traces, dissolving the boundary between inner feeling and the natural world.<br><br>Rather than portraying nature as distant scenery, the work imagines the universe as emotionally alive — a presence capable of comfort, companionship, and unconditional acceptance. The sunset, the moon, and the sea become manifestations of a larger consciousness quietly holding human existence.<br><br>At its core, the painting speaks to a simple but profound feeling: that even within loneliness or uncertainty, nature continues to love us — always by our side.`
            }
          ]
        }
      ]
    },

    // ── Series II: Crimson ───────────────────────────────
    {
      num:  'II',
      name: 'Crimson',
      pages: [
        {
          layout: 'hero-multicolumn',
          artwork: {
            title:    'Crimson',
            meta:     'Oil on Canvas · 2025 · Multi-panel',
            imageUrl: CDN + '985223bb-73a4-41bc-a85f-83d4c9865601/Screenshot+2026-05-25+at+6.31.41%E2%80%AFPM.png',
            paragraphs: [
              'Here, four forces rotate together: passionate trauma, emotional nourishment, deep-blue staircases, and lightning. At the center, orange represents wisdom—the force that guides, integrates, and transforms these conflicting energies into a larger inner structure.',
              'Inspired by the classical line, "Anger rises to the brim of the helmet, leaning on the railing, the rain has just ceased," this painting depicts a figure witnessing the collapse of the mind—and even the fall of a nation—with overwhelming anger and grief. Red represents rising emotional force, while blue symbolizes countless rational and architectural mental structures.',
              'In this section, pale blue emotions nourish the psyche, while light green cognitive structures descend from the sky. The painting suggests the arrival of new forms of awareness and understanding after emotional collapse.',
              'The lower right painting depicts observation and understanding between different forces. At the center of the overall composition is an arm making a "V" sign, which is also the back of a small fox. The fox represents wisdom at the center of the psyche—an awareness that integrates lived experience into a more layered and expansive perspective.',
              'The middle lower section contains a swing, a rainbow, and a necklace—symbols of connection, fragility, and emotional movement. A small red dog faces vulnerability and longing, expressing the tender emotional core hidden beneath intense psychological experience.'
            ]
          }
        }
      ]
    },

    // ── Series III: Reciprocate ──────────────────────────
    {
      num:  'III',
      name: 'Reciprocate',
      pages: [
        {
          layout: 'grid-2x2',
          artworks: [
            {
              title:    'Reciprocate',
              meta:     'Oil on Canvas · 2025',
              imageUrl: CDN + 'ede101aa-a281-42cd-85a8-c01edeb403b4/Screenshot+2026-05-25+at+4.10.39%E2%80%AFPM.png',
              description: `<em>Reciprocate</em> explores a psychological state shaped by surveillance, pressure, and emotional imbalance.<br><br>The eye within the composition symbolizes an ongoing presence of observation and control, while the distorted structures and black forms suggest forces that gradually penetrate the inner emotional space. Boundaries begin to dissolve as consciousness, emotion, and external pressure become entangled.<br><br>The vivid pink line introduces an opposing energy — tenderness, emotional vitality, and the remaining instinct to protect the self. Moving across the painting like both a wound and a boundary, it attempts to interrupt and resist the invasive gaze.<br><br>Standing before the canvas, the relationship of looking begins to reverse. The viewer is no longer only observing, but also becomes the one being looked back at.`
            },
            {
              title:    'Unfaded',
              meta:     'Oil on Canvas · 2025',
              imageUrl: CDN + 'a8220465-bd27-443a-bf10-286c602742b9/Screenshot+2026-05-25+at+8.02.20%E2%80%AFPM.png',
              description: `<em>Unfaded</em> reflects a state in which traces of tenderness continue to exist despite constant transformation and conflict.<br><br>The figures and symbols within the composition intertwine like multiple versions of the self existing simultaneously — rational, passionate, vulnerable, stubborn, and longing to be understood. What begins as a gentle form of recognition gradually becomes entangled with structures of power, control, and reality. Black marks spread across the surface as signs of resistance, struggle, and repetition.<br><br>Yet even as everything shifts, the original tenderness never fully disappears.<br><br>"Unfaded" does not suggest purity or permanence, but rather the persistence of emotional traces through cycles of desire, power, injury, and fate. The colors, gestures, and fragmented forms all remain as evidence of what once existed.<br><br>Gold represents systems of interest and material reality, while the black forms evoke intrusion and oppression. At the same time, the continuing presence of pinks, purples, and flowing colors preserves a softness that has not been completely consumed.<br><br>The work ultimately speaks to a complex human condition: people change continuously, but certain emotions, memories, and forms of love never entirely fade.`
            },
            {
              title:    'Before It Fades — The Beautifully Doomed',
              meta:     'Oil on Canvas · 2025',
              imageUrl: CDN + '1eb6a3da-785c-40f0-9b3e-7789b2fb22f9/Screenshot+2026-05-25+at+8.02.56%E2%80%AFPM.png',
              description: `This work was inspired by a dream.<br><br>In the dream, a middle-aged man stood quietly within an underground passageway. Calm, charismatic, and carrying a restrained sense of exhaustion, he softly reminded me: youth fades.<br><br>The fireworks exploding throughout the background resemble the brilliance of life itself — radiant, intense, and fleeting. A staircase cuts through the composition, leading toward a door at its end. Beyond the door, a young boy pins a nonexistent girl against the wall, as if whispering to her: <em>before it fades.</em><br><br>The red within the painting symbolizes passion, desire, and emotional wounds. Black lines fracture the space, placing the entire world into a state of chaos and instability. Love, loneliness, youth, anxiety, and desire become entangled, erupting violently from within the disorder.<br><br>If everything is destined to fade, then before it faded, let those brief, raw, and passionate moments burn brilliantly like fireworks.`
            },
            {
              title:    'Breaking the Gaze — Emergence from the Storm',
              meta:     'Oil on Canvas · 2025',
              imageUrl: CDN + '7a1e0043-d427-4f9f-af67-115f8512cc69/Screenshot+2026-05-25+at+8.43.40%E2%80%AFPM.png',
              description: `This work portrays a state of life existing at the center of a storm.<br><br>The black and red flags symbolize interpersonal conflict, power struggles, and tensions between opposing ideologies. Within these forces, human existence resembles a small boat drifting through a violent storm, constantly swaying between instability, danger, and loss of control.<br><br>Meteor showers, violent winds, and fractured structures together create a world on the verge of collapse. The blue evokes both the deep sea and the night sky — vast, uncertain, and unknown — while the black forms resemble oppressive forces pressing continuously upon reality.<br><br>Yet amid chaos and decline, green forms of life continue to grow upward. They appear both as plants and as symbols of a spiritual force that cannot be fully destroyed — persistently breaking through, spreading, and emerging within the storm itself.<br><br><em>Breaking the Gaze</em> is not only about conflict, but about the process of growing again through oppression, surveillance, and disorder. Even within a world filled with division and turbulence, life continues searching for its own direction.`
            }
          ]
        },
        {
          layout: 'grid-1full+2',
          artworks: [
            {
              title:    'Passing / Becoming / Not Knowing',
              meta:     'Oil on Canvas · 2024',
              imageUrl: CDN + 'e8ec2506-5d2c-440d-aef1-a1a41f02eff5/Screenshot+2026-05-25+at+8.53.01%E2%80%AFPM.png',
              fullWidth: true,
              description: `This work begins with the Golden Gate Bridge in San Francisco. The bridge appears not only as a physical structure, but also as a passage between different worlds — connecting reality and dream, the known and the unknown, existence and disappearance.<br><br>The colors within the painting do not follow the logic of the actual landscape, but instead form a psychological space. The vivid red bridge stretches across the bay and mountains like a trajectory floating through consciousness. As a result, the surrounding landscape becomes dreamlike and unstable, as though the world itself is slowly shifting between reality and illusion.<br><br>Mist and water continuously expand throughout the composition. The fog of the Golden Gate originates from global ocean currents, traveling across vast distances before gathering within the Bay Area, like the breath of a larger planetary system — a movement of both existence and dissolution.<br><br><em>Passing / Becoming / Not Knowing</em> does not attempt to provide clear answers, but instead reflects a state of continual transformation. Human beings are constantly passing through, becoming, and confronting the unknown. Perhaps life itself exists within this flow that can never be fully defined or contained.`
            },
            {
              title:    'Solar vs. Lunar',
              meta:     'Oil on Canvas · 2025',
              imageUrl: CDN + '156a791d-03b4-4a01-b294-aa72c521696f/Screenshot+2026-05-25+at+8.03.47%E2%80%AFPM.png',
              description: `This work portrays two opposing forms of energy.<br><br>The golden lion symbolizes a solar force — light, order, truth, and visible systems of rules. It carries a direct and stable energy, like a presence capable of illuminating the world itself.<br><br>The gray-blue wolf represents another, more shadowed force: concealment, manipulation, conspiracy, and subconscious control. Rather than confronting directly, it moves through the hidden spaces of the psyche, operating from within the shadows.<br><br>Within the painting, the lion ultimately defeats the wolf. After its defeat, the wolf wears a flattering, submissive smile, as if trying to escape as quickly as possible, while the lion reveals an almost childlike expression of satisfaction and innocent joy.<br><br>The entire background is surrounded by darkness, suggesting a world where unseen shadows always exist beneath the surface. Yet when solar energy is brought fully into the light, those hidden manipulations and subconscious schemes are eventually exposed, illuminated, and gradually lose their power.`
            },
            {
              title:    "The Whale's Vigil",
              meta:     'Oil on Canvas · 2025',
              imageUrl: CDN + '5b5d1fb0-0885-4bcd-b163-6b9f7790758e/Screenshot+2026-05-25+at+8.02.40%E2%80%AFPM.png',
              description: `<em>The Whale's Vigil</em> reflects an ongoing dialogue between two forms of spiritual energy.<br><br>The blue and pink elements symbolize opposing yet interdependent states of consciousness: awareness and the subconscious, logic and emotion, the ego and the higher self, the left brain and the right brain. Rather than existing in conflict, these energies appear to play, communicate, and resonate with one another within the darkness.<br><br>The black space resembles both the deep ocean and the unknown inner structure of the psyche. The storms, chaos, and emotional traces once experienced have not completely disappeared, but instead gradually transform into a field where these energies can move, interact, and play freely.<br><br>After moving through chaos, the spirit begins to learn how to continue dancing, playing, and glowing within the dark.`
            }
          ]
        }
      ]
    },

    // ── Series IV: Roofwalker ────────────────────────────
    {
      num:  'IV',
      name: 'Roofwalker',
      pages: [
        {
          layout: 'sidebar',
          artworks: [
            {
              title:    'Roofwalker',
              meta:     'Oil on Canvas · 2026',
              imageUrl: CDN + '8e73c17b-6d9b-4998-871a-31247bb146e0/Smartist_1D46CCCA-72C7-407A-B6FF-6DFE1D96D48E.png',
              tall: true,
              description: `A lone figure moves across the architecture of the self. Silent. Stable. Relentless.<br><br>This painting began from an image that stayed in my mind for a long time: a black swordsman-like figure standing on the edge of rooftops, crossing through structures, searching for something hidden deep within the psyche.<br><br>The rooftops are not physical buildings. They represent the structures of the mind — identity, memory, ego, defense systems, the internal architectures we spend our lives constructing. To move across them is to travel through layers of the self.<br><br>The fluorescent yellow-green background carries a cyberpunk atmosphere for me — artificial light, psychic noise, digital loneliness, a world suspended between reality and consciousness. It is not natural light. It feels closer to a mental landscape illuminated by technology, desire, obsession, and memory.<br><br>The black figure remains still and grounded amidst movement. Around him, purple gestures swirl through the space like fragments of energy, spiritual traces, or emotional turbulence accumulated over time. Purple became a form of psychic motion — something unstable, drifting, almost wing-like.<br><br>At the center of the work is a search: a masculine force traveling through inner and outer worlds in order to find and protect a lost feminine presence hidden deep inside the self. Not conquest. Not possession. But recognition. Protection. Return.<br><br>For me, the work is about a desire that survives beyond identity itself — an obsession strong enough to cross every structure built by the ego. Some searches outlive the self.`
            },
            {
              title:    'Presence',
              meta:     'Oil on Canvas · 2026',
              imageUrl: CDN + '09a6992b-55d3-43f3-b0dc-a8d29109c8d1/Smartist_CA50706D-A074-4AFC-A1C2-B8A1DB70DBAA.png',
              description: `The black figure remains completely still. No explosion. No movement. Only observation. Yet something massive has already begun to tremble.<br><br>The form on the right exists somewhere between a tree, an organization, a psychic structure, and a fragmented self. Its unstable edges feel less like destruction, and more like vibration under pressure.<br><br>The green space carries a cybernetic atmosphere for me — not natural light, but a mental landscape illuminated by artificial consciousness, digital loneliness, and psychic noise.<br><br>The black marks resemble blade trails, ruptures, or concentrated lines of intention. But the work is not really about violence. It is about presence. Sometimes the most powerful force comes not from action, but from absolute stillness.`
            }
          ]
        },
        {
          layout: 'grid-2+1wide',
          artworks: [
            {
              title:    'Veil',
              meta:     'Oil on Canvas · 2026',
              imageUrl: CDN + '8727e93d-1a3e-4ac8-9073-e8bbfbe17235/Smartist_4B6F59A0-A83D-4F1F-88E3-C4337D28D745.png',
              description: `A figure cloaked in white slowly drifts away through a turbulent and clouded psychic landscape. Her face remains concealed.<br><br>The purple-gray atmosphere is not meant to feel beautiful to me. It feels more like a <em>jianghu</em> constantly disturbed by obsession. Dust, noise, wandering, and an endless spiritual vibration suspended in the air.<br><br>Someone continues searching for her. Pursuing her for a long time, watching her, trying to move closer. But that obsession never truly became protection. Instead, it turned the entire world into greater chaos.<br><br>From her perspective, the <em>jianghu</em> was never a place to stay. It is a continuous process of departure. And the moment she is truly seen is already the moment she is leaving.`
            },
            {
              title:    'As Everything Dissolves',
              meta:     'Oil on Canvas · 2026',
              imageUrl: CDN + 'b191d9cc-c683-4d2f-863e-218e1933ccc5/Smartist_506DDA00-767A-42EB-BA7D-120BA6AD7201.png',
              description: `This work portrays the meeting between the masculine and feminine forces within a single person. The one who once constantly felt a sense of absence no longer searches obsessively for what was missing. And the one who was always afraid of being consumed no longer keeps fleeing.<br><br>The blue and violet space feels, to me, like the complete landscape of a person's time and existence. Past, present, future, memory, fate, and dreams gradually dissolve into one another within the same drifting world.<br><br>Through endless cycles of searching and leaving, something within finally begins to become whole. The masculine and feminine forces stand beside one another, quietly existing within the same spiritual space.<br><br>And what this painting hopes to express is a form of true intimacy, an intimacy and companionship that emerge only after moving beyond possession, control, and fusion.`
            },
            {
              title:    'See love say love you',
              meta:     'Oil on Canvas · 2026',
              imageUrl: CDN + '21b64161-8104-48f0-ac1e-3402af5cf424/Smartist_2D5BE266-2396-40B6-8EF0-6F81C8AF3702.png',
              fullWidth: true,
              description: `This painting explores the two fundamental forces that exist within every individual: the masculine and the feminine. Mirroring and defining one another, they coexist across an infinite field of time and space. Rather than opposing forces, they form a dynamic relationship whose interaction gives rise to a third force — creation.<br><br>The work reflects my interest in what emerges between seemingly opposite states. Within the threshold between these two energies, a space of transformation appears, where new possibilities, meanings, and forms come into being.`
            }
          ]
        }
      ]
    },

    // ── Series V: Clay & Code ────────────────────────────
    {
      num:  'V',
      name: 'Clay & Code',
      pages: [
        {
          layout: 'hero',
          artwork: {
            title:    'Clay & Code',
            meta:     'Mixed Media · 2026',
            imageUrl: CDN + '18b51772-9c48-4fba-874b-3700eb2fa9a1/Screenshot+2026-05-25+at+10.08.03%E2%80%AFPM.png',
            description: `This series explores individual energy moving through dimensions: immediate reality, the Wheel of Fate, and the psychic macrocosm. The work visualizes the tension between physical being — expressed as earth and vulnerability — and spiritual identity, conceptualized as information, code, and shared consciousness.<br><br>Piece I references the Nuwa myth, where human forms sculpted from earth are vulnerable to consumption. Yet the soul exists externally as digital code; these pink lattices unite to achieve agency beyond the fragile physical self. Piece II offers a macrocosmic, "zoomed-out" perspective — standing outside the narrative, we see the Wheel of Fate as a repeating cycle of weary travelers, surrounded by a vast spiritual expanse. Piece III is a "zoomed-in" meditation on this expanse, visualizing its particles as sentient beings — a convergence of spirit and flesh, leaning in with curiosity to witness the cosmic spectacle.`
          }
        },
        {
          layout: 'hero',
          artwork: {
            title:    'Through the Narrow Gate, with Code',
            meta:     'Oil on Canvas · 2026',
            imageUrl: CDN + '2cf3d5ed-747f-416f-bd71-56fe2f4c2883/Screenshot+2026-05-25+at+10.17.53%E2%80%AFPM.png',
            description: null
          }
        }
      ]
    }

  ] // end series

}; // end PORTFOLIO
