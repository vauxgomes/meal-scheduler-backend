#  Meal Scheduler Backend

### <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" /> <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />

- [Description](#description)

## Description
Basic Node.js backend for managing meals in Brazilian Federal Institutes of Technology.

## Running application on Docker
```sh
docker build . -t <your username>/meal-scheduler-backend
docker run -p 4444:3333 -d <your username>/meal-scheduler-backend --name foodapp
```

### Bibtex
In case you want to cite this project:

```bibtex
@misc{Gomes2022,
    author = "{Gomes, Vaux Sandino Diniz}",
    title = {A backend project for managing meals in Brazilian Federal Institutes of Technology},
    year = {2022},
    publisher = {GitHub},
    journal = {GitHub repository},
    howpublished = {\url{https://github.com/vauxgomes/meal-scheduler-backend}}
}
```