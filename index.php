<?php

Kirby::plugin('jg/fields-block', [
    'options' => [
        'hiddenByDefault' => true,
    ],
    'blocks' => [
        'fields' => require __DIR__ . '/blocks/fieldsblock.php',
    ]
]);
