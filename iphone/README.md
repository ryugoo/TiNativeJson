# TiNativeJson

TiNativeJson provides iOS SDK's NSJSONSerialization bridge API for Titanium.

## How to use

```javascript
var module = require('com.r384ta.ti.module.tinativejson');
var json = module.parse('{"key": "value"}');
var text = module.stringify(json);
```

```
[INFO]  ===== module.parse =====
[INFO]  {
[INFO]      key = value;
[INFO]  }
[INFO]  ===== module.stringify =====
[INFO]  {"key":"value"}
```

## License

```
Copyright 2015 Ryutaro Miyashita

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
