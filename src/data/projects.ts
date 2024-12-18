import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'Lab Device',
    title: 'Organoid Incubator',
    shortDescription: 'Design and development of an innovative stem cell bioreactor.',
    thumbnail: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXd-Z8bwxQe-woJTG6FjTnNusu2cLRebn8lt3EzwY5VBHo3Nwa0fwQb8d_fD2s8wseLNe5NR9WW-mCTdTe9twls25I0rLQC73FoSvBVxa0bZAehGoLjuDWSzKDufM_YpRy5uCoebpA?key=_De0L0LGXSW6HeyNti3l8Vt4',
    role: 'Mechanical Design & Project Engineer',
    skills: ['CAD Design', 'IPX7 Design', 'Assembly Design', 'Prototyping', 'Verification Testing', 'Supplier sourcing'],
    fullDescription: `Developed an organoid incubator to enhance growth yields in labs worldwide by improving sterility and designing a user-friendly stirring mechanism. Collaborated with the client to define requirements, select components, and design, build, and test an alpha prototype. Key challenges included achieving an IPX7-rated enclosure, integrating IGUS bearing rotating shafts, using a semi-permeable membrane for sterility, and performing verification testing for CE approval. Due to NDA reasons, I cannot share detailed designs`,
    goals: [
      'Design a humiditiy-resistant enclosure (IPX7 rated)',
      'Optimize for assembly and cost',
      'High focus on usability',
      'Ensure easy maintenance access',
      'Reach CE certification according to IEC 60601 & IEC 61010-1'
    ],
    achievements: [
      'Codeveloped innovative floating stirring mechanism',
      'Achieved IPX7 rating in first testing round',
      'Succesfull sterile design using semipermeable membrane'
    ],
    images: [
      'https://lh7-rt.googleusercontent.com/docsz/AD_4nXd-Z8bwxQe-woJTG6FjTnNusu2cLRebn8lt3EzwY5VBHo3Nwa0fwQb8d_fD2s8wseLNe5NR9WW-mCTdTe9twls25I0rLQC73FoSvBVxa0bZAehGoLjuDWSzKDufM_YpRy5uCoebpA?key=_De0L0LGXSW6HeyNti3l8Vt4',
      'https://lh7-rt.googleusercontent.com/docsz/AD_4nXfI3KyEkjs97y4aNIsrjyNGlXoX6SdIWCmMEBvyLPlOGKQilLJjaHFI9_geu28gA6OrIFESL9WvSLNpq5Tw1eaxiZoWYvLGIBRYqaVOpGCSqnPeeB-oGPrh_DJO-Nfp2HYg_OTmxg?key=_De0L0LGXSW6HeyNti3l8Vt4'
    ]
  },
  {
    id: 'fiber-optic enclosure',
    title: 'Optical Fiber Closure with Gel Sealing Technology',
    shortDescription: 'Development of the next gen optical fibre enclosure.',
    thumbnail: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXcx3QsFkmHpeNC4dX-GidpGTDnzH6kzI5pqIpyaV2e88oZNRS2n8m9pBQiTbsC5ky2Nwn0MNYBned_QowiDcNjrxWNFbwaf0B3SuL8Sp8sG5NQOH5G6E27ZoZXD51BULSolIDiTnw?key=_De0L0LGXSW6HeyNti3l8Vt4',
    role: 'Mechanical Design Engineer in project team',
    skills: ['Injection Mold Design', 'Project management', 'DFM', 'Prototyping', 'Testing', 'Creo'],
    fullDescription: `Collaborated with a multinational company to design the next gen optical fiber enclosure. Main focus was optimizing injection-molded plastic parts for mass production, based on input from test team and molding team. Conducted extensive testing on SLS prints and soft-molded PA parts, refining designs based on results. Simplified assembly by reducing components and enhancing snap joint integration. Focused on a clutch mechanism to auto-stop tightening at the correct pressure. Worked closely with the mold team to improve quality, strength, tolerances, and cost efficiency through mold flow analysis and test injections. (NDA: image shown is a predecessor, I cannot share part designs)`,
    goals: [
      'Design reliable clutch/trigger mechanism',
      'Design detachable handle',
      'Design for manufacturability',
      'Guard overall footprint',
    ],
    achievements: [
      'Plastic snap-on handle passed torque test of 5+ Nm',
      'All parts injection mold ready',
      'Plastic clutch mechanism survived 30+ trigger cycles powered with power tool (500RPM)',
      'Reduced part count by 30%',
      'Designed overmolded parts to reduce assembmly steps needed',
    ],
    images: [
      'https://lh7-rt.googleusercontent.com/docsz/AD_4nXcx3QsFkmHpeNC4dX-GidpGTDnzH6kzI5pqIpyaV2e88oZNRS2n8m9pBQiTbsC5ky2Nwn0MNYBned_QowiDcNjrxWNFbwaf0B3SuL8Sp8sG5NQOH5G6E27ZoZXD51BULSolIDiTnw?key=_De0L0LGXSW6HeyNti3l8Vt4'
    ]
  },
  {
    id: 'cleantech',
    title: 'Cleantech Project',
    shortDescription: 'Design of a heat exchange and buffer system for a copper refining plant.',
    thumbnail: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXdR5qKIaEIoDIhgu7oUkv5p5Eraueu9QK213C-2S3a3uM70DBPsYwqBKivr3w8pGZboLZ5GWLOjrXsVrznWzSgnRFMr7gIAihFlDWjYSpbkk9MbycpqYkw77nwM1yFNofuaf4Q5Iw?key=_De0L0LGXSW6HeyNti3l8Vt4',
    role: 'Mechanical Design & Project Engineer',
    skills: ['Piping Design', 'FEA', 'Site Manager', '3D Scanning', 'Project Management'],
    fullDescription: `Starting from a P&ID, my task was to 3D scan the industrial site and make a digital twin in CAD. From this, I designed connection systems onto the existing piping. Rest heat streams were rerouted to a heat exchanger and stored in a buffer tank for later use. `,
    goals: [
      'Make digital twin of existing industrial facility',
      'Design heat exchange mechanism in this twin',
      'Translate designs to weld drawings',
      'Supplier sourcing',
      'Prepare and coordinate on-site works'
    ],
    achievements: [
      'Heat echanger succesfull in operation',
      'No major hickups during on site mounting',
    ],
    images: [
      'https://lh7-rt.googleusercontent.com/docsz/AD_4nXdR5qKIaEIoDIhgu7oUkv5p5Eraueu9QK213C-2S3a3uM70DBPsYwqBKivr3w8pGZboLZ5GWLOjrXsVrznWzSgnRFMr7gIAihFlDWjYSpbkk9MbycpqYkw77nwM1yFNofuaf4Q5Iw?key=_De0L0LGXSW6HeyNti3l8Vt4',
    ]
  },
  {
    id: 'Mushroom Incubator',
    title: 'Mushroom Incubator',
    shortDescription: 'Design and build a functional prototype of a tabletop mushroom incubator',
    thumbnail: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXchD1OZO6dTyaqKpCQ220MOYSlvk2D01uIQVNjrSIJ21eDdeTn9TZzq0MYjJ_K1fcS6gAI4QCmvkyrqBWp5AvToGTWcPb_1qvLtpIu4_N89uQ2XwehcZ9uncCcs0xXUUN8WgJyEZQ?key=_De0L0LGXSW6HeyNti3l8Vt4',
    role: 'Design Engineer',
    skills: ['CAD', 'Industrial Design', '3D printing', 'Blender', 'Project Documentation', 'Arduino', 'Prototyping', 'Silicone Moulding', 'Soldering'],
    fullDescription: `Design and build an aesthetically pleasing mushroom incubator for kitchen use. The device automates optimal humidity and oxygen levels using ultrasonic atomizer and air fan for various stages of fungal growth, enabling users to grow mushrooms for cooking. Leveraged skills in FDM 3D printing, post-processing printed parts, and silicone pouring. The project is open source.`,
    goals: [
      'Design for 3D printing',
      'Create detailed build manual',
      'Make project open source',
      'Automatic mushroom fruiting'
    ],
    achievements: [
      'Succesfull prototype',
      'Build manual ready',
      'Project open sourced: customers building the device',
      'Mushroom growing succesfull'
    ],
    images: [
      'https://lh7-rt.googleusercontent.com/docsz/AD_4nXfFgKFNgHxAwHFK5NKBeNAEwssnHMcJ15cwGwWyXjW1Yr3DUsvKv3gygEH-aOPJoIco3xgvGcHRNitNCQ_KCgIUA0gd7_wp0euBf6pxAhhIMPLpq3oJM04FUmP2gs6zeDTtHcVIZw?key=_De0L0LGXSW6HeyNti3l8Vt4',
      'https://lh7-rt.googleusercontent.com/docsz/AD_4nXewJFpW7iIMjpLY1AowBX5lO_Ihcf57Kx-O37BVzPOS_cTx0I8D_YAZRWBcVfdmbKAoRaXTUhkYWWiAC2vNpc7LlRxMwZm9oKNY2d3CLuQWm4fkLQZpKab_JFL-7A0-2KaN347vwA?key=_De0L0LGXSW6HeyNti3l8Vt4',
      'https://lh7-rt.googleusercontent.com/docsz/AD_4nXdXSdJ2Qegk8698x6OPa2hF2jdwYhGRQUAvuQJaar0O1d4bICV-73Dgnnwm44LKVfTecfvuJm6KiHzdEA5W9sG1wqEb2YIcYh3Ab7U5gDtnpysf3SgL22xGw7ctrQVROTy-nZih?key=_De0L0LGXSW6HeyNti3l8Vt4',
      'https://lh7-rt.googleusercontent.com/docsz/AD_4nXdPaWLJ4iHDbJGO9r2jHhf8kDJWPhNL5_dpi_h8ajWelako9BJe9mpLgqhcQFhnioZHqul1U6cUEbiFASOgpo6vOkDFUM9Nw6rZGJmTQCqY1fij-nbbdRwVQ2SvIm6xRghgDseV6Q?key=_De0L0LGXSW6HeyNti3l8Vt4',
      'https://lh7-rt.googleusercontent.com/docsz/AD_4nXc_ktSGo1GiQZvqA4rc7rGOxKIvOJIjhXEsd7cqkJSfsLKQKiM39r61Dzmm0tpNGp4vRoSuc25LcjLe0c8dRV5q0OGCsfq9eT7_Z4TyupXCk2KNJtTHOB49yR7S-4efmTQ51bfq6A?key=_De0L0LGXSW6HeyNti3l8Vt4',
    ],
    
    videoUrl: 'https://youtu.be/G_MmrVe9YjQ',
    externalLink: `https://hypnocrafts.com/shroomy`,
  },
  {
    id: 'cybersk8',
    title: 'Electric Skateboard',
    shortDescription: 'Development of a cyberpunk inspired electric skateboard.',
    thumbnail: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXedKDB7-wVqws4Gs6uBEwu9TjvKEmnTYDlZK6G8A59wt_-fRFPTdRRNdNw2Ec4-DmQYMKr5tVTrXzFdngNWti_pQ0chd2wMkFPhI9ZWAP4XYFW1szzqQpu1l3b25V0YiY2Xk5aKFA?key=_De0L0LGXSW6HeyNti3l8Vt4',
    role: 'Mechanical Design Engineer',
    skills: ['Industrial Design', 'Composite Design', 'Battery Design', '3D Printing', 'Prototyping', 'FEM', 'Soldering'],
    fullDescription: `Personal project: Designed and built a custom electric skateboard inspired by the Tesla Cybertruck. Focused on achieving a unique design, a 20km range, and a tight budget. Utilized techniques including 3D printing, CAD design, component sourcing, testing, fiberglass epoxy hand-laying, CNC wood machining, soldering, rendering, and assembling a 18650 battery pack with a BMS.`,
    goals: [
      'CyberTruck Design, look and feel of finished product',
      'Cost below €1000',
      'Range 15km',
      'Minimalistic',
    ],
    achievements: [
      'Finished product look',
      'Total cost €600',
      'Range 20km',
      'Total cost €600',
      'IPX4'
    ],
    images: [
      'https://lh7-rt.googleusercontent.com/docsz/AD_4nXcjUXk1fX_dgwsOf9Gw-3zf4daLQXsP7f8Txs9kwfBu-QHQwoxClib07O_qj9gea9zDWHHQ0e0B1zchcczoigKbFUoN7TGIF1MeI6SwIRbG3L9HQ5X6RHVoMzhILdKbSDi2YvaaAA?key=_De0L0LGXSW6HeyNti3l8Vt4',
      'https://lh7-rt.googleusercontent.com/docsz/AD_4nXedKDB7-wVqws4Gs6uBEwu9TjvKEmnTYDlZK6G8A59wt_-fRFPTdRRNdNw2Ec4-DmQYMKr5tVTrXzFdngNWti_pQ0chd2wMkFPhI9ZWAP4XYFW1szzqQpu1l3b25V0YiY2Xk5aKFA?key=_De0L0LGXSW6HeyNti3l8Vt4',
      'https://lh7-rt.googleusercontent.com/docsz/AD_4nXdWxLNo4qML8_EwcgAsf0S6XHEZ0KQxk-i3kD4EYoZ-caluK_shA96NlgJcD7TFQR7JzCOrgufg5Yt73zOuZx3WiQ49_fXHOOg1MQRA1NN00cvJ72t6cyNb_SLexrRy0xbADejL?key=_De0L0LGXSW6HeyNti3l8Vt4',
      'https://lh7-rt.googleusercontent.com/docsz/AD_4nXfcMOX0wfc3BYCLTv2c_EBQ7dVBr8COolgq1H8_seqLrkZeGdUFgGxQvq-2No7G5NEC5fWIk3BB6ETJbXcfgqS8mCKJMRCxGXeYiZC_qclC7C-p1hXawk9bxm0fDukzOedH-Qwu?key=_De0L0LGXSW6HeyNti3l8Vt4',
      'https://lh7-rt.googleusercontent.com/docsz/AD_4nXd6QWWOOPp-SH30Pnr8QoPbHVajdewHvxmsyACAVWz5exQ8QS7FXbeIFkykkEmNJTIhTu9FQGXCJ3jnX4yP-vV-MxaP-AxUWPh-Vuh27XFMVzJLd5RctOf5d769Q98IsvtIA-PcdQ?key=_De0L0LGXSW6HeyNti3l8Vt4',
      'https://lh7-rt.googleusercontent.com/docsz/AD_4nXemysPmN8403RGGSUa1L7D62xijKCdPY4_080G9u4RTbC0RGAl5si5RsXY062ZD5D5EtFIB2PLma48sXHcDB6IEdHIq3Tqa18oiSF49axe3qKCTJWqcbxRdJZsIQjAgcv69wYvk4g?key=_De0L0LGXSW6HeyNti3l8Vt4',
      'https://lh7-rt.googleusercontent.com/docsz/AD_4nXdJfEhrNPvjHS9kYL1blVxYisJ_ebmoeBf0xrU5RqdC_HZR1b2t4BRqAtiDnpp44MpCQz-76X8i8qIy6T8EhjsCjH1YZoAB-CGCNHzgmLlVNcRkWsu6p_eexfPoAGAia_8Nf3_kpQ?key=_De0L0LGXSW6HeyNti3l8Vt4',
      'https://lh7-rt.googleusercontent.com/docsz/AD_4nXeq7wwtDORg_SJOzPxpJRchuOsmGCZc92N961DCBla2UkRSdlO1hxkS_Z2LDJoCn3mYmLj4t7rR1041DGuVvtPobQVfyCjNrB_jZ2nzoOZX72fyx5hvgTMMu6hXuIBZJtPZ-jF5?key=_De0L0LGXSW6HeyNti3l8Vt4',
      'https://lh7-rt.googleusercontent.com/docsz/AD_4nXcrhaaWly3RstPaPesvFedlX5YMS2JNrtZNON8Y1wQTiHuYB9wSFT6KSbL9MaEio-KEO32gXzEtGUta4Fpu_zJWE1j9Yi3JdV8jJZqtBS1QoBYJw2Y0oihKQYwoNRZNIgM-7_xuYw?key=_De0L0LGXSW6HeyNti3l8Vt4',
    ]
  },
  {
    id: 'DIY CNC machine',
    title: 'DIY CNC machine',
    shortDescription: 'Personal project: CNC machine on a budget',
    thumbnail: 'https://lh7-rt.googleusercontent.com/docsz/AD_4nXcRhZMceTkvKwY0tzedK7GdDTpafe_vuSNBZiDDsEQZjKqeU7fLGYub4o9PMFXh154b9Anzg1RK3FrpsXrRQajC1ULWgzABnX42k3-FPdEgJ17I8W0Fdr0TOam8Q9lzddOCuR7m?key=_De0L0LGXSW6HeyNti3l8Vt4',
    role: 'Mechanical Design Engineer',
    skills: ['CAD', '3D printing', 'Mechatronics', 'Prototyping', 'CNC'],
    fullDescription: `Collaborated with friends to build a CNC machine capable of machining wood and soft metals like aluminum. The frame was constructed using aluminum extruded profiles, with custom 3D-printed parts for clamping and connections. The axes are driven by stepper motors and timing belts, while V-slot wheels were used as a cost-effective linear bearing solution.`,
    goals: [
      '600x600mm XYZ cutting capabilities',
      'Tight budget',
      'Wood and soft metals (aluminium)',
    ],
    achievements: [
      'Cost efficient',
      'Remodeled to laser cutter due imporper stiffness frame',
    ],
    images: [
      'https://lh7-rt.googleusercontent.com/docsz/AD_4nXcRhZMceTkvKwY0tzedK7GdDTpafe_vuSNBZiDDsEQZjKqeU7fLGYub4o9PMFXh154b9Anzg1RK3FrpsXrRQajC1ULWgzABnX42k3-FPdEgJ17I8W0Fdr0TOam8Q9lzddOCuR7m?key=_De0L0LGXSW6HeyNti3l8Vt4',
      'https://lh7-rt.googleusercontent.com/docsz/AD_4nXd0MD1IMXIOmD46N5KelixzHcl1edQQyqPGw4bsSBVdUdVaGNxc-3mm08NsNrMrisUubIdmEcSdjz_UfLjnx5Bb12m9Q_w62Gopi332gBD9uv7O8JQ7zLsOBT2dSxDwHGbwPTyb3w?key=_De0L0LGXSW6HeyNti3l8Vt4',
      'https://lh7-rt.googleusercontent.com/docsz/AD_4nXfe37DJ45wsqS03AT1Zco-OFZyKHB1J9QSUZnXdRvwPzf-2Udixwy-yHB4GzUBbNAauHSEwrlLFv3rpUQKbWMjjmV6GhynyBm0srG7bngn1FT37b0s_O3rLb-Y_pWmR1RCMq44B?key=_De0L0LGXSW6HeyNti3l8Vt4'
    ]
  }
];