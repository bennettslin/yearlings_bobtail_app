# yearlings_bobtail_app

## Development

Run runtime build on local.

```
npm run start
```

## Staging

Run compiled build on local.

```
npm run stage
```

## Release

Build and deploy candidate release. Includes admin routes.

```
npm run release:candidate
```

Build and deploy delivery release. Reflects production.

```
npm run release:delivery
```

Build and deploy production release. This script does not empty the S3 bucket prior to deployment because the previous files may still be needed while CloudFront takes its time to propagate.

```
npm run release:production
```
