import React from 'react'
import Image from './Image'
import PropTypes from 'prop-types';


function Profile({fullName,bio,profession, handleAlert}) {
  return (
    <div>
        <h1>{fullName}</h1>
        <h1>{bio}</h1>
        <h1>{profession}</h1>
        <br/>
      <Image><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgWFhUZGBgYGRgYGBoYGBoVGBgYGBgaGRgYGRgcIS4lHB4rJBgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHjQhJCs0NDQ0NDQ0NDQ0NDQxNDQ0NDQxNDQ0NDQxNDQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAIgBcwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAECBAUGBwj/xABDEAACAQIDBAYHBgQEBgMAAAABAgADEQQSIQUxQVFhcYGRobEGEyIyUsHRB0JikuHwFHKCohVTY8IWM5Oy0vEjNIP/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAmEQACAgEEAQQDAQEAAAAAAAAAAQIRIQMSMUFhBCJRgRMycbGh/9oADAMBAAIRAxEAPwCvljhZMLJhZ5dHr2CyRwkKFj5ZSRLYLLGIhiJErGkQ2KmJeoiVEWXaIm0DKRcpLDhYOkJZCzoRhIAViywxWQbQXPCUQDewFzMPE7cKWbKmRvdu5Dlb2z5Mvu8dLm3CUNt7SZxYEhGBsBo7qd1/hU+InM4qvfRVA33IJJY9JOpA7pk55pGihi2dJW9LLHRA/wDKxA/uQXi/4oYatTAHCzgm/RpOUQAEZhYWt0nt4fpziequt9eQ+6PnfphukG2JoYrbLO5JfU8iQFHKwOvWZr7K2s6uEfVWByNcEXAva4nG1HB4fKSoYkjKNfZOYceBF/GUm0J0z0ltqIN5g22xTHGcamIV+NpJqQ5xPVaBaSZ1TbdpwuD2qtQ2E40oOcs7PxSo17xx1G2TLTSR3MFik0mdS23Ttq0obU26zWFEi1vaNrm82lJJWzGMXJ0jRKQuHT2hOTfaNY73I7hKtTFOd9U/mMj8sTT8Muz0lyo3kDrIEqVcfRXfVQf1Cec1Kin7xPeYIuvI90PyeA/DXZ3mL23hrf8AMB6gT8pk1tvUx7tz/TbznKl/w+MdQx3AdphufwGxLs1MftYPuB8JPD7fdBZUB6yflMZg17EqPERMgt/zB1BT52huYbUaGI21Uc3so6h9TKzbSq/HbqAEqqE4s3ZIOE4X7YWwwHfGud7t+YiVnrX3sT1m8SWH3b6fsxy1uA7RAWAZqCMCTuBhhU6e5RGJa+maAEPVP8JiFFjy75M03PBowpMdfMgRhYMUd9yBbxj4dPbXjrbw/WT9QeLKO2RAsy63sy7uv9IpcDjyj1P7I8LSehVz00d0q2zMiswBUaXI3aTuNtYNGw1ZAqjNTcaAD7pnCfY9Us+KT8SN35hPS6yXUjmCO8SVkt4Z8t2jSzj6WSo6fC7r3MRK0szfI8UaKAj15aMKKEH/ABS84WliVbQTz0kek2xxREf1Qk4pVEtgygkcohSI2QykiWwYEs0YHIYeihlxREmXaUsiVqYlkTZGEhmMwPSLaaojUwCzOpDAG2VTpcnp10l/bW0RQQvvO5RzY7uzQnsnnmJxDOWYm5bU8z1DgJM5VhF6cbyxqlV3JYNck23buAHygcVQZAVFjY2LC+vG2uo/SDZebWPC3/vSVnc87zOKNJMTqeJglS55xy3OPUrECw3/AClozZDJc2sIyrra8gmsKicxeUINh1seXhC4+4AKm2gB77Ay7s6iDa+6S9INnGmquLlG055Wte3Ude4zNSTlRTi1GznGrtzgzUPMxmkTNjFjlzzM2PR5r516j8piTW9Hm/8AkYc18jI1V7GaaDrUQbD01KD4szAk6iwOkJVoqPvC/IA+ZkqSH2xbRXNz16iGFNLa/wDb9TEsmrVIzyBIG3KXTkHP+0SDOnLvb6CWkZyfgplhyg2hy4+EQTm5+kCaB5egyYw7fB36ecYNLNKmLA8esfQxpIiWCuKDfhHWRHGGbmOwE+QlmqDcWJHIa69I0ErOjnjp0t+sdCH/AIbeMx000BHnBYmmFtYk9dvkTG9QeLL+a8Z0AA9oHqvACVM+z1H98JeYEjS4/N+kzR/MeqOFB4mU8k8FjKN9zpprYa9pkP6l7x8hGVEO5Ce0/IRMnKn3k/OIaYzleLA95leqRY24a+P6ybUW5AdokGSwPV+vyioqz0T7KKtsbXT46St3FfrPWzPFfszq5doJ+Ogw7QAflPajIXBpLk+cfS+hkxuIX/UY/mOb5zFnXfabQyY+p+II3eLfKcjLRlLkUUUUYjvvWGX9kNd7TLzS5sqqFcXnmxWT1ZPB2C4eEGGiXHUwBrE21aY4zqSRxtyJDCx/4aV327THEQL+klMcpXtFkv8A8NJLQmK/pQnDylWp6V8hHuiLbI6daclacZU9KX4CVavpNU4St8SdjD+mlUmqq30RC1vxMfoBOUZyBfiZpbVxLO5Zt5UX6OMysRckngJzqW6VnS47YpA81+PfBOI7SJ0+U0RiyBEjExjSyQyWvzvLeGpMSLGVKIHKa+zFJNxuHORN0ioq2a2z8Gbi/hNjauAD4aogGuQsv8y+0viBKOFxKgi+niJdp7dpgkWYhfeKrmC9c5Vd2jpdVR5aFJ3A90f1L/C3cZq4ysyO6q91DMFtpdb+ye60rNXY/ePfPQVM4HgrDCOfuHyl7Y1BkrLewvcbxylZ6h/ZiwFUiqh/EPHSTNXFrwPTdST8o2nS1SqL29xrc7i0iyg/sCHxllrtcXzU9Ogg74JiLaDruROeDtJ+DtkqbXkrOo/Z+ggnty84VngmaapoykgLSJhS0GxvKM2DMLSS498gctw8TBkRXHLxlIiSCVKS/Gb/AImFvOBakB99ey5+Ud2HBbdNyYExioaKIxCAMXGGVzxUk87keAgTHz9vSY0yWiwrub2QW43J+ZjMXPBB3QPr26O4RvXvzgFBHzniOwfQQdVTxN9/A8jGaqx+8e+QDEkXPEQH2dP6B1suOwjc86eYnvRnzr6NVcmIwrfDiAPzET6LMzRbPF/thoZcUj/HT/7WP1nnxnqf20UP/rv/ADr5H5Tywy0Q+RooooyTtbxB4LNFmnn0enZa9aeZjFzBI0cmUkS2OWkS0YmQJlJEtjsZAmOTIEykiGxmMG8kZBhKoVlvGW477L08P0EzsRVv1CHruCBrrYDp00+nfAVitrC9+zKPqZnBbTXUknlFUtIM0k0GZsjmYzRKJYweDaoTbcN5O4S3/hBIJR0axsw1BBicop02NQk1dFfDoG0Jt4EzfoMiLZe/dOfFKxsTY90vYXZqsNdegkmRqV2y9O+kX6mKW9i6KDofaF+681Mft7CUkRKOU1FysxCsFIBBKvuzAi4I5GAwOBppvo0zfjlU26dRpL+29mJ6pHprYKXza/HrYC9rX1malE1akcLj8UKjs4QLmZ2sNBqbgAcAN0rTewWzxVpMumcu7020+IrkJ4BrHqNjzmG6FSVYEEEgg6EEaEETrjJPC6OOcWsvsG0CjWYHkQe4w7Ss0ohHU7TPt025qw8jAmSxj3Si/Ir4raQO+ccOEv6j0ZvLf8f/AAA0E0NUgWM1RjIgZAyZkDKRmxiIrJzbsA+sTGTTNfRiL8gZcSGCZRwDRDKN6E9tvlCvTI+8deG7r4yNSnYbye0eV5RFldyDuFvGQEk3RIiAxxbjCLkA1Fz/ADfpBGSUjiIITQb2Oj+4xi6ch+X6mR9YNNOvQRnrnhoOoQChNUXkewAQTtykjVbnIO5O8wsKLOEfLZvgrI3j+k+lka4B5gGfMan2anUrdx/WfSOyauehSf4qaHvUSFyy3wjivthoXwqP8FQeIInjBnvX2nUc+AqfhKt3MJ4KZaIY0UUUZJ1maLNB5os046PQsKHtEasCWjZoUS2GFSTvKytC3lJEtk1FzaW1wQy3zi/Ig+cq0QSdBf8AfHohDVYG2l951014XibaZUUmskiiKfav1jgemUajhW1vbf7O/dcb+yFcWBPjcHx32lYgFDrrcG/XpbXqjiTKgeIr5gDa2vA8gB17h33lYuZZqU7qLAAC5J3XJtpfibC9umAr0CoBvvF/0mlGVsFIGImOi3MYjf2JYU2A1IdGIOl1Nwe4lYTHVGSs91sgcqegLcLu38yekyhhndGDLvHPUEHeCOIm9s/aq5vbYrcAHN7a5Rb2bMDbQWvrOaSqVnUnca+DHx+CsxIYMCd43W4HWFoMUEPtDEIzt6q5QWCkixNgLm3XeDRLwk3VMIpJ2jY2JiLuLzsMTsxHUMAQfeKgkIxG7Mu6cPs2kVYGeh7OfMnTYTOKttFSdUzzrYeECKatfNTTOd9gSWJJAvYAA/szD9JcbTrYh3pLZLKo3+0VUAtrrrbjwAnY+nWGpCg/tpnDoygG7F75SNPws3dPOTOrRjeXyc2vLhLgYyu++WIB986DnNzNfDIfhK+DSbmAwRzYZxyzfWFDAgHoE5EsteTuvCfhDVBpe0rtLlIpxv8A2/OCxLrfQHw+U129mLlmiqZAwxZeXjIlx8MpLyS34BGPYaa+IjZTvtGBHKOJLJOigaHx4d0gXT4P7o5qD4V8frImp0L3SiQRjQhqHo06BEazc/AQAHEtum8TNfU8ZIVOgQAIqD4T3n6RZPw+cgKpjuU4Fj2QAVvwj99sgR0DwjEr0yJI/fjACVH745ofC30nv/oTXz4DDN/pKPy6fKeA4b3h0hh4Ge1/ZhWzbPpD4S69zn6yexvhGp6Y0c+CxC/6bHuF586T6b2jTzUnX4kYd4M+ZnWxI5EjuNpSJZCKKKMk7FsDyfvFvnKtWmy7+8aiFNcxetuLHUGctHZZWvJ+rME4sZJah5ykhNhRRMS7wJHOYRKoAF1BGYXPHq6oUTYxqld37/WNWxBJAHAcd5lfEVNdLdkFZh7dtL7+F+UKKciZc8b9sGr6/vnIu4P0kDeNIhsm+IYgC+g3DgOyESqCCG4jQjh2StnHLzk1cAEHQ791+y/CVQgLqRLuBw5Osrr7RF+GgsAOnW2/fNnDJJnKkVGNsLQpWhauEuLgQiCbOx6ea85mzdI5Rly6QtKtab21tki5IFuqYVTZ7jUQ3J8jr4NvZrgkTt9kqct+Fp5ngKrI2oM7PY23QDZhpx4aRRwwlbRzHp7Wooww9OnZgVdmvoLhhZR0634ad3Gzf9M9opXxLNT9xVVAd+YgszNfiLuR2TAM7oKkji1G3KxjAVIeCqCWZmnsdro6/vUR6LewvV5QGxn9phzAhaPu25Mw8ZzyXuf0dcXcV9hkOm8DrIgXcnfrCJYg38z8hAMZXRPZExjETGMpEsnTpgjfxiNEXI10Py6pPDHQx3HtHs8uqUkZNuyqyG5sDpHpKp38+mEDAM19Lj98IFEOhtpGMLiEVb2HVv75UlmrScnny3CBNMj/ANiAkQiiiMBjGNEY0AFGiigASibMvXPXvsjq3wjp8Fdx3qp+c8eQ7usT1T7IKns4pP8AUR/zLb5Rdg+D0DH4ladN3a+VEZjbfYC5tPmrF1FZ3ZfdZ2YX32JJF57D9pOKrZVSnVKKUbOoCnOG0sSRcWAO7nPGCIRkpNpdBKMopN9jRR4pRB0paRzSJMgWnPR02PWOl4LNJM0ADGDD54le/VIK0khEdAM6gdUT1DYKCbcumQRLtYmwvqd8IHVCSvtaEC44EWJ69dOUKFYF1HAm/V3+MGXMZjrOt9HvRRqgD1RYaZVPHpI+UbwCTZg7O2U9X3RYcyCe4cZ1mB9FXRcyDMxGt/eP0H71nYYDZtOkALAmaLVAqkkgAA7zbqk88miSXB5//wAMGqLKqpVAuFPsF132PAOd43aA3mW2FZCUZSrDQhgQR1gz0dijGxcF1NwQcrKect18HSxaBaq+2B7LiysekdP4dQfKHG+xt7c1g8vUWnRejaX1lfbWwKmHcKdVb3WA0YfI9E3NgYfKLTBp3TLtVaD4uiCQOf7tOd9KsUlJDTRsr2R2ItmyF8thfcTZunSdTjLLdjw8TwAnFemeFBy1gAc9kbjr93wuP6RKhFOWRNvbaOJx9Zlcharsu8HO249si7k7yT1m8rYhSGIO8GGU6DqnZFKjjk22PGiMUskUHUEJIuICC7Maz9YMsjRnH4vMSjhGs6maiIhJZnOttABwmUl7vo3g7j9kaJ3j6nykalI8Ae4jzh8tIfefuWQb1XN/7RGmqBp3ZTYWjGWyaPJ/zL9I2ej8LH+sfSPAslVHI3RxVJNzblulj1lH4D+c/SL19L/L/vaBLRXqAHj9PKJMoGp8/pDjE0/8pfzP/wCUicYg3Uk7c5/3SiaBPUHA256SuRLhx6/5VP8AKx/3SH+I/wClS/IPnAOCqYxlv/Em+Cn/ANNPpF/iD8FQf/nT/wDGFBZSMaXxtGpzUf0Ux/tjHaNT4+4KPIQwFlGLKZdbaFT/ADG7CRINjn+N/wAzaeMBlbIQNQR2T0D7K8YlPEV1dggdEyljlDMpNwCd5sZw2IqllW9RnJLZlOayW0U3JsbgndukFqHQDfoB18INAuD0r02r56z2Og9nuFvrPK6nvHrM7rbbhFIG5Eyj+hbDynCuNZy+ld7n8s6vVpJRXwiMUUU6ziN0tIFpAtIlpjR0WOWiRLyBMLhqTObCNITJil0xBBzI7DLa7PbjK2Pp5CFG+1zx04eUpqiUysXIOkguYmwvcmwHTJWOhPdum/6G4AO5qsLqmig7i518B5iTwUlbo2/Rn0YVCHqgM+hAOoB6p171LEKu+2pgUfKOZ+ZkHxApIXOrE6DmTy6ZFm6VBsTiVpjWzNy3Bf5iPITHxeNqOeQ4Hcw36gfd8+mOoLnO+n4TpY8ejUyGIfyP7690GxpGbiUY29tjY6XPu7tRylrZu16lMhX9pTz6eR7ejdK1erc+O+/GEp0ww37svRfUDyuJm2Wkds20UdAlY+y+qVCL5GAJAfjcWOvLfzlPC+yx3W6Dcd/GZOynLJkfmWU8iG0A7isr1XdFK3NrMp1IPs33EaglN1uKxS9xKglwKtttcRVq0k92mLg8GZTZ9ei4X83RGx93wzgakKxHO6HMO2UdmbPo4c51V9bJYtmX2mGu6+4E7zHTHLkqoCc1MPv7V07fOLhmiXto83rvc356nthKbaCWNqhAQqrlZCytyYA+y3dKlLdOyLtHnTVMLeK8hHEoglERHiMAIFZA1DJmDZYUNMXrDF60xryJMVBbJetMb1hkDGjoLZM1TEKhkDHS19b26N8AsubNp+sqIhNgxtfsnSP6M0wjn1l3CkrbdcDQTW+z/wBCaeMQ4g1HQI5RQQpzFVBLaHd7VuwzvV9BcOBrVqE9GVR5GFCs+ey5l+uaYVQuU3AJJzAg/CdfKd56VejmAwzItIrUdi5fM+fLutom69zv5Tl9oUFsBTVBvvlS5HLU7uMncrovZLbuB4+vhnSmKdAI4JLm5IYW3b+cseswlJ0dVDqws9N7sVJHvK3RMZMI99ba79CTLuDwQDXOe3MKCfGVZNF2jtDCDMhoXBByOVs+u656OcLg9oUKV0fDpVQqbOyKKikjnuax4w52WlZWb+Jt6tQbOgVrbgARv1sO2CwexMTWRvVuChbLc3BbJodDuANx2QaBOjnEpwooiCa6sVO9SVPWDY+UmKkvazVOJL1QlnZ1JfWpfdnU/lN/lAI0s4VgHBOu/wCnzkaiai/4aQ2uSNH0ieyEcWIXxufKclV3zd21iM2QcgW69AF+cxsUliOqYemjtgHqpbp2ugMUUU3OU0y0iTFFMzYiTLWArMpJXlr1Xt84oo0Jhqm0GB3yvWxGbUi56dPLWKKNiRX1chVGpNgBxJ3T0bZGGFCmicQLt0tvP76I8UzkbaPLNEVgxA3Ab7fKBDl3z39lNEHO/G3KKKQbDV62l83DTXdymZXqX6uFjHiiGVHby/dpfwR7/wB/SKKSxo16SWyvbQEdxNz5mGsrgg+8jgG2+w3X7CRGiiGUcfQyplHDK4PRmsO75ic7i3yVsQeD01I6c4Td2kxRQXI3wcxttPaV/iUX61AHlaUacUU6ofqjz9T9mEiiilmZK8RMUUYDSJjxQAG6y5srYlfE5vUpny2zagWvu3xRSZDia9P0Bxx30iPHyllPs8xP3lfsT9Yook2VSBbT9EGwyesdKhQe+SFULusTxtAYWlh0yOVVlvqoYEnjYjlHiim6RUIp2dDhfS6pST1dBadNLltBmNzv36cOUkKWPxYDO7FG1Bd8qEHiEXh2RRTGUmbKKRo4P0OUWNSqT+FAB/c1/ISOGehRxv8ADtTXILtmYZnytSuLE7znVrHhbgIooPCwaemSnqbZcZ/w43EU65LNSpOyFnZWWkzWQt7Ga1wDYr+xL+y/RLH4mmWQqlsxy1C6VDlF9FyWF7i3OKKdZwFDCbOrISxrJYj2vZd9BrwT5zUoY1EQItSqwA+7TAB4kkl76nXdFFADGqYShmZstRsxJ1dEGpvuy38YOvSQL7FIXPHM7kdl8uvVFFBvDHD9kQw+Aqv7lJz1IQPESb4V0qBKgKtYGx32J0uOyKKY0dOrquttCx2H9bXCJvKqBfQXsWPVpKO2tm1KOXPl9q9srZt0aKXp/qc827ZmxRRRkn//2Q=="  style={{backgroundColor:"red",borderRadius:"50%"}}/>
      </Image>
      <button onClick={()=>handleAlert(fullName)}>click here</button>



        
    </div>
  )
}
Profile.defaultProps = {
  fullName: "jhon",
  Bio: "gbdgtbdv",
  profession: "developeur",
}

Profile.propTypes = {
  fullName: PropTypes.string,
  Bio:PropTypes.string,
  profession:PropTypes.string
};
export default Profile